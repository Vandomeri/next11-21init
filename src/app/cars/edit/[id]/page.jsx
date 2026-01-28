import { prisma } from "@/lib/prisma"
import { updateCar } from "@/lib/serverActions"

export default async function EditCarPage({ params }) {
    const { id } = await params

    const car = await prisma.car.findUnique({
        where: {
            id: Number(id)
        }
    })

    return (
        <div>
            <form action={updateCar}>

                <input defaultValue={car.id} type="text" hidden name="id" />
                <input defaultValue={car.marka} name="marka" type="text" placeholder="Марка авто" />
                <input defaultValue={car.model} name="model" type="text" placeholder="Модель авто" />
                <input defaultValue={car.hp} name="hp" type="text" placeholder="Мощность двигателя" />
                <input defaultValue={car.year} name="year" type="text" placeholder="Год выпуска" />
                <input defaultValue={car.color} name="color" type="text" placeholder="Цвет авто" />

                <button>Добавить авто</button>

            </form>
        </div>
    )
}
