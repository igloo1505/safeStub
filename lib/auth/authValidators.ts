import { ROLE } from "@prisma/client";
import { Session } from "next-auth";

export type AuthRole = ROLE | "all" | "authenticated" | "unauthenticated" | "verified"

export const validateRole = (roles: AuthRole[], session?: Session | null) => {
    if (roles.includes("all")) return true
    let role = session?.user?.role
    if (roles.includes("authenticated") && session?.user) {
        return true
    }
    if (roles.includes("unauthenticated")) {
        return Boolean(!session)
    }

    if (!role || !roles.includes(role)) {
        return false
    }

    console.log(`Reaching default validateRole return`)
    return false
}
