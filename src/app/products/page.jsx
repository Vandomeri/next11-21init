import Counter from "@/components/Counter";
import Link from "next/link";

export default async function ProductsPage() {

    const resp = await fetch('https://dummyjson.com/products')
    const data = await resp.json()
    console.log(data)

    return (
        <div>
            <h1>Каталог товаров</h1>

            <div className="grid grid-cols-4 gap-4">
                {data.products.map(product => (
                    <Link href={`/products/${product.id}`} className="border border-pink-500 p-4" key={product.id}>
                        <img className="w-full" src={product.images[0]} alt="" />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </Link>
                ))}
            </div>



        </div>
    )
}