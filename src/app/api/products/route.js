import { prisma } from "@/lib/prisma"

export async function POST(request) {
    const body = await request.json()

    const product = await prisma.product.create({
        data: {
            title: body.title,
            price: Number(body.price),
            description: body.description
        }
    })

    return Response.json(product)

}