"use client"
import React from 'react'
import LogoutModal from './logoutModal'
import { Provider } from 'react-redux'
import store from '#/state/store'
import PhoneNumberModal from './phoneNumberModal'
import TicketDetailModal from './ticketDetailModal'




const Notifications = () => {
    return (
        <Provider store={store}>
            <LogoutModal />
            <PhoneNumberModal />
            <TicketDetailModal />
        </Provider>
    )
}


Notifications.displayName = "Notifications"


export default Notifications;
