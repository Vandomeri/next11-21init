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

export async function DELETE(request) {
    const body = await request.json()

    const deletedProduct = await prisma.product.delete({
        where: {
            id: Number(body.id)
        }
    })

    return Response.json(deletedProduct)
}


export async function PUT(request) {
    const body = await request.json()

    const updatedProduct = await prisma.product.update({
        where: {
            id: Number(body.id)
        },
        data: {
            title: body.title,
            price: Number(body.price),
            description: body.description
        }
    })

    return Response.json(updatedProduct)

}