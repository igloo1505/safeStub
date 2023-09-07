import { ROLE, VERIFICATIONSTATUS } from "@prisma/client"
import NextAuth, { DefaultSession, Profile as AuthProfile, Account as AuthAccount } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            address: string
            name?: string | null
            email?: string | null
            image?: string | null
            role?: RoleTypes
            id?: string | number | null
            idVerified?: VERIFICATIONSTATUS
        } & DefaultSession["user"]
        error?: "RefreshAccessTokenError"
    }
    interface JWT {
        name?: string | null
        email?: string | null
        picture?: string | null
        sub?: string
        role?: ROLE
    }
    interface User {
        id: string
        name?: string | null
        email?: string | null
        image?: string | null
        role?: ROLE
        idVerified?: VERIFICATIONSTATUS
    }
    interface Profile extends AuthProfile {

    }
    interface Account extends AuthAccount { }
}


declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        access_token: string
        expires_at: number
        refresh_token: string
        error?: "RefreshAccessTokenError"
        idToken?: string
        idVerified?: VERIFICATIONSTATUS
    }
}

