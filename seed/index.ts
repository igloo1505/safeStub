// import { deleteAllGames } from "./clearEvents"
import { seedGames } from "./seedNflGames2023"
import { seedLocalData } from './seedLocal'

// const wait3FuckingMinutesForPrismaToCatchup = 60 * 3 * 1000

// setTimeout(seedGames, wait3FuckingMinutesForPrismaToCatchup)
// deleteAllGames()

seedLocalData()

setTimeout(() => {
    seedGames()
}, 60000)
