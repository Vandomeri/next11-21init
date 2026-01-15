export function GET() {

    const productsFromDb = [
        {
            id: 1,
            title: 'iphone'
        },
        {
            id: 2,
            title: 'samsung'
        }
    ]

    return Response.json(productsFromDb)

}

export async function POST(request) {

    const body = await request.json()

    // Какая-то логика добавления бренда в БД

    return Response.json({
        status: 'success',
        message: `Бренд - ${body.title} добавлен`
    })

}