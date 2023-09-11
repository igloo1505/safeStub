import seedTags from "./data/tags"
import seedTeams from "./data/teams"
import { prisma } from "../db/db"
import { Prisma } from "@prisma/client"
import { seedGames } from "./seedNflGames2023"

export const seedLocalData = async () => {
    for (var n = 0; n < seedTags.length; n++) {
        const item = seedTags[n]
        await prisma.tag.create(item)
    }
    const logoData = []
    for (var l = 0; l < seedTeams.length; l++) {
        const item = seedTeams[l]
        const logos = item.data.logos?.createMany?.data as Prisma.LogoCreateManyTeamInput[]
        for (var k = 0; k < logos.length; k++) {
            const _item = logos[k]
            logoData.push({
                url: _item.url,
                path: _item.path
            })
        }
        await prisma.team.create(item)
    }
    // console.log(logoData)
}

seedLocalData()
