'use client'

import { useState } from "react"
import UserCreateForm from "./UserCreateForm"
import Link from "next/link"

export default function ProductCards({ Products }) {

    const [products, setProducts] = useState(Products)

    async function deleteProduct(id) {
        const resp = await fetch('/api/products', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })

        const result = await resp.json()

        if (resp.ok) {

            setProducts(

                products.filter(product => product.id !== result.id)

            )

        }
    }

    return (
        <div>

            <UserCreateForm setProducts={setProducts} />

            <div className="grid grid-cols-6 gap-5 ">
                {
                    products.map(product => (
                        <div className="bg-gray-600 text-white p-4 rounded-lg" key={product.id}>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                            <button
                                className="px-2 py-1 bg-red-500 text-white"
                                onClick={() => deleteProduct(product.id)}
                            >Удалить</button>

                            <Link href={`/products/edit/${product.id}`}>Редактировать</Link>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
