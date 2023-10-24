import { NFLTeamName } from "@prisma/client"

interface NFLTeamRegex {
    team: NFLTeamName
    regex: RegExp
}

abstract class TeamRegexAbstract {
    abstract team: NFLTeamName
    abstract regex: RegExp[]
    constructor() {
    }
    abstract testString(s: string, level: "some" | "every"): boolean
}

export class Team_Cardinals extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Cardinals
    regex: RegExp[] = [
        new RegExp("Cardinals", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Falcons extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Falcons
    regex: RegExp[] = [
        new RegExp("Falcons", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Ravens extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Ravens
    regex: RegExp[] = [
        new RegExp("Ravens", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Bills extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Bills
    regex: RegExp[] = [
        new RegExp("Bills", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Panthers extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Panthers
    regex: RegExp[] = [
        new RegExp("Panthers", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Bengals extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Bengals
    regex: RegExp[] = [
        new RegExp("Bengals", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Bears extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Bears
    regex: RegExp[] = [
        new RegExp("Bears", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Browns extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Browns
    regex: RegExp[] = [
        new RegExp("Browns", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Cowboys extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Cowboys
    regex: RegExp[] = [
        new RegExp("Cowboys", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Broncos extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Broncos
    regex: RegExp[] = [
        new RegExp("Broncos", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Lions extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Lions
    regex: RegExp[] = [
        new RegExp("Lions", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Texans extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Texans
    regex: RegExp[] = [
        new RegExp("Texans", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Packers extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Packers
    regex: RegExp[] = [
        new RegExp("Packers", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Colts extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Colts
    regex: RegExp[] = [
        new RegExp("Colts", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Rams extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Rams
    regex: RegExp[] = [
        new RegExp("Rams", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Jaguars extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Jaguars
    regex: RegExp[] = [
        new RegExp("Jaguars", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Vikings extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Vikings
    regex: RegExp[] = [
        new RegExp("Vikings", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Chiefs extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Chiefs
    regex: RegExp[] = [
        new RegExp("Chiefs", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Saints extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Saints
    regex: RegExp[] = [
        new RegExp("Saints", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Raiders extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Raiders
    regex: RegExp[] = [
        new RegExp("Raiders", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Giants extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Giants
    regex: RegExp[] = [
        new RegExp("Giants", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Chargers extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Chargers
    regex: RegExp[] = [
        new RegExp("Chargers", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Eagles extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Eagles
    regex: RegExp[] = [
        new RegExp("Eagles", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Dolphins extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Dolphins
    regex: RegExp[] = [
        new RegExp("Dolphins", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_FourtyNiners extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.FourtyNiners
    regex: RegExp[] = [
        new RegExp("FourtyNiners", "gi"),
        new RegExp("Niners", "gi"),
        new RegExp("49er", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Patriots extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Patriots
    regex: RegExp[] = [
        new RegExp("Patriots", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Seahawks extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Seahawks
    regex: RegExp[] = [
        new RegExp("Seahawks", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Jets extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Jets
    regex: RegExp[] = [
        new RegExp("Jets", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Buccaneers extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Buccaneers
    regex: RegExp[] = [
        new RegExp("Buccaneers", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Steelers extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Steelers
    regex: RegExp[] = [
        new RegExp("Steelers", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}
export class Team_Commanders extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Commanders
    regex: RegExp[] = [
        new RegExp("Commanders", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}

export class Team_Titans extends TeamRegexAbstract {
    team: NFLTeamName = NFLTeamName.Titans
    regex: RegExp[] = [
        new RegExp("Titans", "gi"),
    ]
    constructor() {
        super()
    }

    testString(s: string, level: "some" | "every" = "some"): boolean {
        return this.regex[level]((r: RegExp) => r.test(s))
    }
}


export const getNflTeamRegexList = () => {
    return [
        new Team_Cardinals(),
        new Team_Falcons(),
        new Team_Ravens(),
        new Team_Bills(),
        new Team_Panthers(),
        new Team_Bengals(),
        new Team_Bears(),
        new Team_Browns(),
        new Team_Cowboys(),
        new Team_Broncos(),
        new Team_Lions(),
        new Team_Texans(),
        new Team_Packers(),
        new Team_Colts(),
        new Team_Rams(),
        new Team_Jaguars(),
        new Team_Vikings(),
        new Team_Chiefs(),
        new Team_Saints(),
        new Team_Raiders(),
        new Team_Giants(),
        new Team_Chargers(),
        new Team_Eagles(),
        new Team_Dolphins(),
        new Team_FourtyNiners(),
        new Team_Patriots(),
        new Team_Seahawks(),
        new Team_Jets(),
        new Team_Buccaneers(),
        new Team_Steelers(),
        new Team_Commanders(),
        new Team_Titans(),
    ]
}

export const getMatchingTeamsFromString = (s: string, level: "every" | "some" = "some") => {
    return getNflTeamRegexList().filter((t) => t.testString(s)).map((t) => t.team)
}
