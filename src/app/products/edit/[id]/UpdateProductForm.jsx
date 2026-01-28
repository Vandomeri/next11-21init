'use client'

import { useRouter } from "next/navigation"

export default function UpdateProductForm({ product }) {


    const router = useRouter()


    async function updateProduct(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/products', {
            method: 'PUT',
            body: JSON.stringify(Object.fromEntries(formData))
        })

        if (resp.ok) {
            router.push('/products')
        }
    }

    return (

        <div>
            <form onSubmit={(e) => updateProduct(e)} className="max-w-125 mx-auto flex flex-col gap-y-4">
                <input type="text" hidden name="id" defaultValue={product.id} />
                <input defaultValue={product.title} name="title" type="text" placeholder="Введите заголовок" />
                <input defaultValue={product.price} name="price" type="number" placeholder="Введите цену" />
                <textarea defaultValue={product.description} name="description" placeholder="Введите описание"></textarea>
                <button>Сохранить</button>
            </form>
        </div>
    )
}
