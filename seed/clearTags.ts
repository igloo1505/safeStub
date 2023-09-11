import { prisma } from '../db/db'

export const deleteAllTags = async () => {
    await prisma.tag.deleteMany({})
}
console.log(`Deleted all tags`)

deleteAllTags()
