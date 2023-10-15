interface InitialNotificationState {
    modals: {
        logout: boolean
        phoneInput: boolean
    }
}


export const initialNotificationState: InitialNotificationState = {
    modals: {
        logout: false,
        phoneInput: false
    }
}
