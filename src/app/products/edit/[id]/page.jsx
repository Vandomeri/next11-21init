import { prisma } from "@/lib/prisma"
import UpdateProductForm from "./UpdateProductForm"

export default async function EditProductPage({ params }) {

    const { id } = await params

    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

    return (
        <div>
            <UpdateProductForm product={product} />
        </div>
    )
}
