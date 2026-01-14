

export default async function ProductPage({ params }) {
    const { id } = await params

    const resp = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await resp.json()
    console.log(data)
    return (
        <div className="max-w-200 mx-auto">
            <h1>{data.title}</h1>
            <img src={data.images[0]} alt="" />
            <p>{data.description}</p>
            <p>{data.price}</p>
        </div>
    )
}