import { prisma } from "#/db/db"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { providers } from "./authProviders";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        session({ session, token, user }) {
            if (session.user) {
                session.user.role = token?.role
                session.user.idVerified = token?.idVerified
                session.user.id = token?.id as string
                session.user.idVerified = token?.idVerified
            }
            // Return a cookie value as part of the session
            // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
            // session.someCookie = someCookie
            return session
        },
        // async signIn({ user, account, profile, email, credentials }) {
        //     console.log("user, account, profile, email, credentials: ", user, account, profile, email, credentials)
        //     const isAllowedToSignIn = true
        //     if (isAllowedToSignIn) {
        //         return `/profile/${user.id}`
        //     } else {
        //         // Return false to display a default error message
        //         return false
        //         // Or you can return a URL to redirect to:
        //         // return '/unauthorized'
        //     }
        // },
        // async redirect({ url, baseUrl }) {
        //     console.log(`In redirect, url: ${url}, base: ${baseUrl}`)
        //     // Allows relative callback URLs
        //     if (url.startsWith("/")) return `${baseUrl}${url}`
        //     // Allows callback URLs on the same origin
        //     else if (new URL(url).origin === baseUrl) return url
        //     return baseUrl
        // },
        async jwt({ token, user, account, profile, isNewUser }) {
            // TODO: Handle token reauth like this... https://authjs.dev/guides/basics/refresh-token-rotation?frameworks=core
            // Persist the OAuth access_token and or the user id to the token right after signin
            // Old stuff
            if (user) {
                token.role = user.role
                token.idVerified = user.idVerified
            }
            if (account) {
                token.accessToken = account.access_token
                token.id = user.id
            }
            return token
        }
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/newUser'
    }
}
