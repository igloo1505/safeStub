import { CityApiType, StateByName, Steps } from "#/types/inputValidation"
import { Location } from "@prisma/client"


interface LegalName {
    first: string
    middle?: string | null
    last: string
}


export interface CreateUserReqBody {
    email: string
    password: string
    name: LegalName
    location: {
        city: {
            id?: number | null
            name: string
        },
        street?: string
        state: StateByName
    }
}


export interface CreateUserFormData extends CreateUserReqBody {
    confirmPassword: string
}

export interface SignupFormType {
    data: CreateUserFormData
    activeStep: Steps
    firstStep: boolean
    lastStep: boolean
    localCities: CityApiType[]
}

export const initialSignupFormState: SignupFormType = {
    data: {
        email: "",
        password: "",
        confirmPassword: "",
        name: {
            first: "",
            middle: null,
            last: ""
        },
        location: {
            street: "",
            city: {
                name: "",
                id: null
            },
            state: "" as StateByName
        }
    },
    activeStep: "1",
    firstStep: true,
    lastStep: false,
    localCities: []
}


export interface CreateUserRequestType extends Omit<SignupFormType['data'], "confirmPassword"> {
    location: {
        city: {
            id?: number | null
            name: string
        },
        street?: string | undefined
        state: StateByName
    }
}


export type SignupFormDataType = SignupFormType['data']
