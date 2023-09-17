export const formatTeamName = (name?: string | null) => {
    if (name === "49ers") {
        return "FourtyNiners"
    }
    return name
}
