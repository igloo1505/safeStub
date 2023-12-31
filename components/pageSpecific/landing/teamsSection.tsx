import { NFLTeamName } from '@prisma/client'
import { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'



const teamLogos: { team: NFLTeamName, logo: string }[] = [
    { team: "Bears", logo: "/assets/teams/logos/Bears.svg" },
    { team: "Bengals", logo: "/assets/teams/logos/Bengals.svg" },
    { team: "Bills", logo: "/assets/teams/logos/Bills.svg" },
    { team: "Broncos", logo: "/assets/teams/logos/Broncos.svg" },
    { team: "Browns", logo: "/assets/teams/logos/Browns.svg" },
    { team: "Buccaneers", logo: "/assets/teams/logos/Buccaneers.svg" },
    { team: "Cardinals", logo: "/assets/teams/logos/Cardinals.svg" },
    { team: "Chargers", logo: "/assets/teams/logos/Chargers.svg" },
    { team: "Chiefs", logo: "/assets/teams/logos/Chiefs.svg" },
    { team: "Colts", logo: "/assets/teams/logos/Colts.svg" },
    { team: "Commanders", logo: "/assets/teams/logos/Commanders.svg" },
    { team: "Cowboys", logo: "/assets/teams/logos/Cowboys.svg" },
    { team: "Dolphins", logo: "/assets/teams/logos/Dolphins.svg" },
    { team: "Eagles", logo: "/assets/teams/logos/Eagles.svg" },
    { team: "Falcons", logo: "/assets/teams/logos/Falcons.svg" },
    { team: "FourtyNiners", logo: "/assets/teams/logos/FourtyNiners.svg" },
    { team: "Giants", logo: "/assets/teams/logos/Giants.svg" },
    { team: "Jaguars", logo: "/assets/teams/logos/Jaguars.svg" },
    { team: "Jets", logo: "/assets/teams/logos/Jets.svg" },
    { team: "Lions", logo: "/assets/teams/logos/Lions.svg" },
    { team: "Packers", logo: "/assets/teams/logos/Packers.svg" },
    { team: "Panthers", logo: "/assets/teams/logos/Panthers.svg" },
    { team: "Patriots", logo: "/assets/teams/logos/Patriots.svg" },
    { team: "Raiders", logo: "/assets/teams/logos/Raiders.svg" },
    { team: "Rams", logo: "/assets/teams/logos/Rams.svg" },
    { team: "Ravens", logo: "/assets/teams/logos/Ravens.svg" },
    { team: "Saints", logo: "/assets/teams/logos/Saints.svg" },
    { team: "Seahawks", logo: "/assets/teams/logos/Seahawks.svg" },
    { team: "Steelers", logo: "/assets/teams/logos/Steelers.svg" },
    { team: "Texans", logo: "/assets/teams/logos/Texans.svg" },
    { team: "Titans", logo: "/assets/teams/logos/Titans.svg" },
    { team: "Vikings", logo: "/assets/teams/logos/Vikings.svg" },
]

const TeamLogo = (data: typeof teamLogos[number]) => {
    return (
        <Link href={`/team/${data.team}` as Route} className={"w-full h-full bg-gray-200 bg-opacity-0 hover:bg-opacity-60 dark:hover:bg-black dark:hover:bg-opacity-80 transition-all duration-300 cursor-pointer rounded-lg flex flex-col justify-center items-center"}>
            <Image
                src={data.logo}
                id={`${data.team}-logo`}
                alt={`${data.team} logo`}
                width={300}
                height={300}
                className={"w-full h-auto max-w-full max-h-[10vh] landscape:max-h-[15vh]"}
            />
        </Link>
    )
}


const TeamsSection = () => {
    return (
        <div className={"w-full flex flex-col justify-center items-center p-6"}>
            <div className={"grid grid-cols-[1fr_auto_1fr] w-5/6 max-w-screen-md place-items-center"}>
                <div className={"h-[1px] w-full bg-white"} />
                <h2 className={"text-white text-2xl font-bold tracking-wider my-6 px-6 text-center"}>Who&apos;s your team?</h2>
                <div className={"h-[1px] w-full bg-white"} />
            </div>
            <div className={"grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(8,1fr)] landscape:grid-cols-[repeat(8,1fr)] landscape:grid-rows-[repeat(4,1fr)] gap-2 md:gap-6 w-5/6 max-w-screen-md"}>{teamLogos.map((t, i) => <TeamLogo {...t} key={`${t.team}-logo`} />)}</div>
        </div>
    )
}


TeamsSection.displayName = "TeamsSection"


export default TeamsSection;
