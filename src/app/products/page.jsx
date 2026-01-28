import ProductCards from "@/components/ProductCards"
import UserCreateForm from "@/components/UserCreateForm"
import { prisma } from "@/lib/prisma"

export default async function ProductsPage() {


    const products = await prisma.product.findMany()


    return (
        <div>
            <h1>Список товаров</h1>



            <ProductCards Products={products} />


        </div>
    )
}