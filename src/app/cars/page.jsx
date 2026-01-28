import { prisma } from "@/lib/prisma"
import { createCar } from "@/lib/serverActions"
import DeleteButton from "./DeleteButton"
import Link from "next/link"

export default async function CarsPage() {

    const cars = await prisma.car.findMany()

    return (
        <div>

            <form action={createCar}>

                <input name="marka" type="text" placeholder="Марка авто" />
                <input name="model" type="text" placeholder="Модель авто" />
                <input name="hp" type="text" placeholder="Мощность двигателя" />
                <input name="year" type="text" placeholder="Год выпуска" />
                <input name="color" type="text" placeholder="Цвет авто" />

                <button>Добавить авто</button>

            </form>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Марка</th>
                        <th>Модель</th>
                        <th>Мощность двигателя</th>
                        <th>Год выпуска</th>
                        <th>Цвет авто</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cars.map(car => (
                            <tr key={car.id}>

                                <td>{car.id}</td>
                                <td>{car.marka}</td>
                                <td>{car.model}</td>
                                <td>{car.hp}</td>
                                <td>{car.year}</td>
                                <td>{car.color}</td>
                                <td className="p-5">
                                    <Link className="" href={`/cars/edit/${car.id}`}>Редактировать</Link>
                                    <DeleteButton id={car.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    )
}
