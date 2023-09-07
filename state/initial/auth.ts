import { RetrievedUserData } from "#/types/AuthTypes"
import { transformUserForClientState } from "#/utils/server/transformUserForClientState"
import { User } from "@prisma/client"

export interface InitialAuthStateType {
    authenticated: boolean
    user?: RetrievedUserData
}


export const initialUserAuthState: InitialAuthStateType['user'] = undefined

const authState: InitialAuthStateType = {
    authenticated: false,
    user: initialUserAuthState
}


export default authState

