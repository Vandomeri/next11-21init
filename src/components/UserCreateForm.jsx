'use client'


export default function UserCreateForm({ setProducts }) {


    async function createProduct(e) {

        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({
                title: formData.get('title'),
                price: formData.get('price'),
                description: formData.get('description')
            })
        })

        const result = await resp.json()

        if (result) {
            // добавляем товар на экран
            setProducts(prev => [...prev, result])
        }

    }

    return (
        <div>
            <form onSubmit={(e) => createProduct(e)} className="max-w-125 mx-auto flex flex-col gap-y-4">
                <input name="title" type="text" placeholder="Введите заголовок" />
                <input name="price" type="number" placeholder="Введите цену" />
                <textarea name="description" placeholder="Введите описание"></textarea>
                <button>Создать</button>
            </form>

        </div>
    )
}
