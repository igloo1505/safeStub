import { Session } from "next-auth";

export interface WithSession {
    session?: Session | null
}
