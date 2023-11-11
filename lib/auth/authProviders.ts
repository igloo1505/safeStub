import Email from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
import { prisma } from "#/db/db"
import { PrismaAdapter } from "@auth/prisma-adapter";


export const providers = [
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
            }
        },
        // profile(profile: GoogleProfile) {
        //     return { ...profile, role: profile.role ?? "USER", id: profile.sub }
        // },
    })
]


