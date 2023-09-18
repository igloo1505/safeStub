import { Location } from "@prisma/client"

export const formatTeamName = (name?: string | null) => {
    if (name === "49ers") {
        return "FourtyNiners"
    }
    return name
}


export const formatLocation = (location: Location) => {
    return `${location.city}${location.state || location.country ? ", " : ""}${location.state || location.country || ""}`
}
