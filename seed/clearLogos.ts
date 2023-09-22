import { prisma } from '../db/db'

export const deleteAllTeams = async () => {
    await prisma.logo.deleteMany({})
    console.log(`Deleted all teams`)
}

// deleteAllTeams()
