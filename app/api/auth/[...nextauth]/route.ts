import { NextApiResponse } from "next";
import NextAuth from "next-auth"
import Email from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
import { prisma } from "#/db/db"
import { PrismaAdapter } from "@auth/prisma-adapter";
const providers = [
    // TODO: Come back and handle this once Apple developer license is active again.
    // AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    // })
    // Email({
    //     server: {
    //         host: process.env.NODE_MAILER_HOST,
    //         port: Number(process.env.NODE_MAILER_PORT),
    //         auth: {
    //             user: process.env.NODE_MAILER_USER,
    //             pass: process.env.NODE_MAILER_APP_PASS,
    //         },
    //     },
    //     from: process.env.NODE_MAILER_USER,
    // }),
    FacebookProvider({
        clientId: process.env.FB_APP_ID!,
        clientSecret: process.env.FB_APP_SECRET!
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_AUTH_ID!,
        clientSecret: process.env.GOOGLE_AUTH_SECRET!,
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
            }
        },
        /// @ts-ignore

        profile(profile: GoogleProfile) {
            return { role: profile.role ?? "user" }
        },
    })
]





// const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")

// Will hide the `GoogleProvider` when you visit `/api/auth/signin`
// if (isDefaultSigninPage) providers.pop()

const AuthHandler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers,
    callbacks: {
        session({ session, token }) {
            /// @ts-ignore

            session.user.role = token.role
            // Return a cookie value as part of the session
            // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
            // session.someCookie = someCookie
            return session
        },
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            /// @ts-ignore
            if (user) token.role = user.role
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                // token.id = profile.id
            }
            return token
        }
    },
    pages: {
        signIn: '/auth/signin',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user'
    }
})



export { AuthHandler as GET, AuthHandler as POST }

