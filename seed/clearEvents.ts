import { prisma } from '../db/db'

export const deleteAllGames = async () => {
    await prisma.event.deleteMany({})
    console.log(`Deleted all events`)
}

deleteAllGames()
