import { authOptions } from "#/lib/auth/authOptions"
import { getServerSession as getAuthServerSession } from "next-auth"


export const getServerSession = async () => {
    return await getAuthServerSession(authOptions)
}
