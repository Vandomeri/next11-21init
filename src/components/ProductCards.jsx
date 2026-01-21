'use client'

import { useState } from "react"
import UserCreateForm from "./UserCreateForm"

export default function ProductCards({ Products }) {

    const [products, setProducts] = useState(Products)

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
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
