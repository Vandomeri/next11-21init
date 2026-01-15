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

export function POST() {



}