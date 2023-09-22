import { prisma } from '../db/db'
import data from './data/static/games/fromAPI.json'
import { NFLTeamName, Prisma, Team, USSTATE } from '@prisma/client'
import cData from '../data/server/USOnly.json'
import { LocationJSONData, states } from '../types/inputValidation'
import { TBDArena, TBDTeam } from '../types/events'
const cityData = cData as LocationJSONData

export const nflTeamNameList = [
    "Patriots",
    "Jets",
    "Falcons",
    "Saints",
    "Giants",
    "Bengals",
    "Eagles",
    "Browns",
    "Lions",
    "Vikings",
    "Cardinals",
    "Seahawks",
    "Bears",
    "Chiefs",
    "Packers",
    "Chargers",
    "Jaguars",
    "Rams",
    "Titans",
    "FourtyNiners",
    "Texans",
    "Cowboys",
    "Commanders",
    "Colts",
    "Broncos",
    "Raiders",
    "Panthers",
    "Buccaneers",
    "Bills",
    "Dolphins",
    "Ravens",
    "Steelers"
]

const getTeamId = async (name: string) => {
    const s = name.split(" ")
    let _name = s[s.length - 1]
    _name === "49ers" && (_name = "FourtyNiners")
    if (!nflTeamNameList.includes(_name)) {
        console.log(`Not found: ${_name}`)
    }
    const team = await prisma.team.findFirst({
        where: {
            name: {
                equals: _name as NFLTeamName
            }
        }
    })
    return team?.id
}



type CityMapKey = "Canton" | "Foxboro" | "Seattle" | "Cincinnati" | "Detroit" | "Miami Gardens" | "Tampa" | "Cleveland" | "Glendale" | "Orchard Park" | "Chicago" | "Charlotte" | "Arlington" | "Baltimore" | "Inglewood" | "New Orleans" | "Las Vegas" | "Philadelphia" | "East Rutherford" | "Atlanta" | "Houston" | "Pittsburgh" | "Indianapolis" | "Green Bay" | "Minneapolis" | "Santa Clara" | "Landover" | "Nashville" | "Kansas City" | "Jacksonville" | "Denver" | "London" | "Frankfurt" | "Foxborough"



const cityMap: { [k in CityMapKey]: USSTATE | "UK" | "GER" } = {
    Glendale: "AZ",
    "Orchard Park": "NY",
    Atlanta: "GA",
    Charlotte: "NC",
    Houston: "TX",
    Chicago: "IL",
    "Miami Gardens": "FL",
    Denver: "CO",
    "Kansas City": "MO",
    Cleveland: "OH",
    Arlington: "TX",
    Indianapolis: "IN",
    "East Rutherford": "NJ",
    Philadelphia: "PA",
    Tampa: "FL",
    Landover: "MD",
    Jacksonville: "FL",
    Baltimore: "MD",
    Seattle: "WA",
    Minneapolis: "MN",
    "Santa Clara": "CA",
    Canton: "OH",
    Foxboro: "MA",
    Foxborough: "MA",
    Cincinnati: "OH",
    Detroit: "MI",
    Inglewood: "CA",
    "Las Vegas": "NV",
    Pittsburgh: "PA",
    "New Orleans": "LA",
    "Green Bay": "WI",
    Nashville: "TN",
    London: "UK",
    Frankfurt: "GER"
}

const getCity = (city: CityMapKey) => {
    city === "Foxboro" && (city = "Foxborough")
    const _state = cityMap[city]
    if (_state === "UK" || _state === "GER") {
        return {
            city: city,
            country: _state,
        }
    }
    const state = states.find((s) => s.abbrev === _state)
    if (!state) return console.log(`No state found for city ${city}`)
    const stateData = cityData[state.name]
    const _city = stateData.cities[stateData.cities.map((c) => c.name).indexOf(city)]
    if (!_city) return console.log(`No city found for ${city}, ${state.name}`)
    return _city ? {
        city: city,
        state: cityMap[city] as USSTATE,
        lat: parseFloat(_city.latitude),
        long: parseFloat(_city.longitude)
    } : { city: "TBD" }
}

const formatGame = async (g: typeof data.response[0]) => {
    const tbdGame: Prisma.EventCreateArgs = {
        data: {
            category: "Sports",
            date: new Date(g.game.date.timestamp * 1000),
            title: g.game.stage,
            description: g.game.week,
            arena: {
                connectOrCreate: TBDArena
            },
            amenities: {
                create: {}
            }
        }
    }
    if (!g.game.venue.name) {
        return tbdGame
    }
    const superbowl = g.game.week === "Super Bowl"
    let participants: number[] = []
    const homeTeam = g.teams.home.name ? await getTeamId(g.teams.home.name) : false
    const awayTeam = g.teams.away.name ? await getTeamId(g.teams.away.name) : false
    if (homeTeam) {
        participants.push(homeTeam)
    }
    if (awayTeam) {
        participants.push(awayTeam)
    }

    if (!homeTeam && !superbowl) {
        return console.log(`No teamId found for team ${g.teams.home.name}`)
    }

    const _city = getCity(g.game.venue.city as CityMapKey)
    if (!_city) return console.log(`No city data found for ${JSON.stringify(g.game.venue, null, 4)}`)

    const arena: Prisma.ArenaCreateOrConnectWithoutEventsInput = {
        where: {
            name: g.game.venue.name
        },
        create: {
            name: g.game.venue.name,
            location: {
                create: {
                    ..._city
                }
            },
            amenities: {
                create: {}
            },
            homeTeams: {
                ...(homeTeam && {
                    connect: {
                        id: homeTeam
                    }
                }),
                ...(!homeTeam && {
                    connectOrCreate: TBDTeam
                })
            }

        }
    }
    type _Tag = string | null
    const _tags: _Tag[] = [g.league.name, g.teams.home.name, g.teams.away.name, g.game.venue.name, g.game.stage].filter((g) => g !== null)
    console.log("participants: ", participants)
    const event: Prisma.EventCreateArgs = {
        data: {
            category: "Sports",
            date: new Date(g.game.date.timestamp * 1000),
            title: g.game.week,
            description: `${g.teams.away.name || "TBD"} at ${g.teams.home.name || "TBD"}`,
            arena: {
                connectOrCreate: arena
            },
            amenities: {
                create: {}
            },
            ...(participants.length > 0 && {
                participants: {
                    connect: participants.map((p) => ({ id: p }))
                }
            }),
            tags: {
                connectOrCreate: _tags.map((t) => {
                    const _t = t as string
                    return {
                        where: {
                            value: _t as string
                        },
                        create: {
                            value: _t
                        }
                    }
                }
                )
            }
        }
    }
    return event
}



export const seedGames = async () => {
    let games: Prisma.EventCreateArgs[] = []
    for (const _g of data.response) {
        let _game = await formatGame(_g)
        if (_game) {
            games.push(_game)
        }
    }
    const seedItem = async (i: number): Promise<boolean | null> => {
        let remaining = games.length - 1 - i
        let seeding = games[i]
        /// @ts-ignore
        if (seeding?.data?.participants?.connect?.length !== 2) {
            console.log("seeding: ", JSON.stringify(seeding, null, 4))
        }
        if (remaining >= 0) {
            await prisma.event.create(seeding)
        }
        if (remaining >= 1) {
            setTimeout(async () => await seedItem(i + 1), 2000)
        }
        return true
    }
    await seedItem(0)
}

seedGames()
