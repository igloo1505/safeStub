import { ToastConfigType } from "#/types/uiTypes"
import { Faq } from "@prisma/client"
import { FaqFormData } from "./adminState"
import store from "../store"

type modalValue = boolean | number


export interface InitialUIStateType {
    darkMode: boolean,
    modals: {
        tos: modalValue
        privacy: modalValue
        payment: modalValue
        idVerification: boolean
        faq: Faq | FaqFormData | false
        dashboardGuide: boolean
        shareItem: false | string
    },
    toasts: ToastConfigType[]
    drawer: {
        open: boolean
    },
    viewport: {
        height: number
        width: number
        navbarHeight: number
    },
    hamburger: boolean | null,
    pages: {
        events: {
            panelOpen: boolean
        }
    }
}


const initialUiState: InitialUIStateType = {
    darkMode: true,
    modals: {
        tos: false,
        privacy: false,
        payment: false,
        idVerification: false,
        faq: false,
        dashboardGuide: false,
        shareItem: false
    },
    toasts: [],
    drawer: {
        open: false
    },
    viewport: {
        navbarHeight: -1,
        height: -1,
        width: -1
    },
    hamburger: null,
    pages: {
        events: {
            panelOpen: false
        }
    }
}


export const shouldHamburger = (authed: boolean) => {
    return authed || typeof window === "undefined" ? true : window.innerWidth <= 768
}


export type ModalKeyType = keyof InitialUIStateType['modals']

export default initialUiState
