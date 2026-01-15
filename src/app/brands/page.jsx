'use client'

import { useEffect, useState } from "react"


export default function BrandsPage() {

    const [brands, setBrands] = useState([])

    useEffect(() => {

        async function getBrands() {

            const resp = await fetch('/api/brands')
            const data = await resp.json()
            setBrands(data)

        }

        getBrands()

    }, [])

    const [title, setTitle] = useState()

    async function createBrand(e) {
        e.preventDefault()

        const resp = await fetch('/api/brands', {
            method: 'post',
            body: JSON.stringify(
                {
                    title: title
                }
            )

        })

        const data = await resp.json()

        console.log(data)

    }


    return (
        <div>
            <h1>Brands Page</h1>

            {
                brands.map(brand => (
                    <p key={brand.id}>{brand.title}</p>
                ))
            }


            <form onSubmit={(e) => createBrand(e)}>
                <input value={title} onInput={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Brand name" />
                <button>Создать</button>
            </form>

        </div>
    )
}