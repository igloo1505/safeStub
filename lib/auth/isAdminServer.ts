import { getServerSession } from "#/actions/server/auth"
import { ROLE } from "@prisma/client"


export const isAdminServer = async () => {
    let session = await getServerSession()
    return session?.user.role === ROLE.ADMIN
}
