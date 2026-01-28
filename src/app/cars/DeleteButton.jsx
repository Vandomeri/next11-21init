'use client'

import { deleteCar } from "@/lib/serverActions"


export default function DeleteButton({ id }) {
    return (
        <button className="cursor-pointer" onClick={() => deleteCar(id)}>Удалить</button>
    )
}
