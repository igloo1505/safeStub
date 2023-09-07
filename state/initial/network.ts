import { ROLE } from "@prisma/client"


export interface InitialNetworkStateType {
    loading: boolean
    logState: "development" | ROLE | false
    reqTime: number | null
    timerState: "timing" | "complete" | "production"
    t: number | null
}

const initialNetworkState: InitialNetworkStateType = {
    loading: false,
    logState: "development",
    reqTime: null,
    timerState: "complete",
    t: null,
}

export default initialNetworkState
