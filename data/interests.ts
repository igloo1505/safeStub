import { CATEGORY } from "@prisma/client"

export interface InterestType {
    label: string
    category: CATEGORY
}

export type MappedInterestType = { [k in CATEGORY]: InterestType[] }

let _initialInterests: InterestType[] = []

const sportsCategories: string[] = [
    "Packers",
    "Bucks",
    "Brewers",
    "Admirals",
    "UWM Basketball",
    "Marquette Basketball",
    "Badgers Basketball",
    "Badgers Football"
]

const musicCategories: string[] = [
    "Rock'n'Roll",
    "Pop",
    "90's",
    "Oldies",
    "Country",
    "Local Artists"
]
_initialInterests = [..._initialInterests, ...sportsCategories.map(s => ({ label: s, category: "Sports" } as InterestType))]
_initialInterests = [..._initialInterests, ...musicCategories.map(s => ({ label: s, category: "Music" } as InterestType))]

export const initialInterests = _initialInterests
