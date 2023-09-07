import NextAuth from "next-auth"
import { authOptions } from "#/lib/auth/authOptions";



const AuthHandler = NextAuth(authOptions)



export { AuthHandler as GET, AuthHandler as POST }

