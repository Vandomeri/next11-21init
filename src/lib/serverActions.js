'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"

export async function createCar(formData) {

    const car = await prisma.car.create({
        data: {
            color: formData.get('color'),
            hp: Number(formData.get('hp')),
            marka: formData.get('marka'),
            model: formData.get('model'),
            year: Number(formData.get('year'))
        }
    })

    revalidatePath('/cars')

}

export async function deleteCar(id) {
    const deletedCar = await prisma.car.delete({
        where: {
            id: Number(id)
        }
    })

    revalidatePath('/cars')

}

export async function updateCar(formData) {

    const updatedCar = await prisma.car.update({
        where: {
            id: Number(formData.get('id'))
        },
        data: {
            color: formData.get('color'),
            hp: Number(formData.get('hp')),
            marka: formData.get('marka'),
            model: formData.get('model'),
            year: Number(formData.get('year'))
        }
    })

    redirect('/cars')

}