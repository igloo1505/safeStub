import { NFLTeamName } from "@prisma/client"
import queryMap from "#/utils/server/query/queryMap.json"

export const getQueryHelper = (query?: string): (null | NFLTeamName) => {
    if (!query) return null
    let regex = new RegExp(query, "gi")
    let l = Object.keys(queryMap).find((k) => {
        let d = queryMap[k as keyof typeof queryMap] as string[]
        return d.some((v) => regex.test(v))
    }
    )
    return l ? l as NFLTeamName : null
}
