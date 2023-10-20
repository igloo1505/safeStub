"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from '#/state/store'




const AdminNotifications = () => {
    return (
        <Provider store={store}>
        </Provider>
    )
}


AdminNotifications.displayName = "AdminNotifications"


export default AdminNotifications;
