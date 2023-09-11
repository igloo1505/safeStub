import { prisma } from '../db/db'

export const deleteAllTeams = async () => {
    await prisma.team.deleteMany({})
    console.log(`Deleted all teams`)
}

deleteAllTeams()
