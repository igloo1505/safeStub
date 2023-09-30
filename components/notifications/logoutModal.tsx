"use client"
import React, { useEffect, useReducer } from 'react'
import ModalOverlay from './modalOverlay'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { closeNotification } from '#/state/slices/notifications'


interface LogoutModalProps {
    open: boolean
}


const connector = connect((state: RootState, props: any) => ({
    open: state.notifications.modals.logout,
    props: props
}))


const LogoutModal = connector(({ open }: LogoutModalProps) => {
    const closeLogout = () => {
        store.dispatch(closeNotification("logout"))
    }
    return (
        <ModalOverlay open={open} onClick={closeLogout}>
            <div className={"flex flex-col justify-center items-start space-y-2 px-4 py-3 rounded-md bg-popover text-popover-foreground min-w-[300px] border border-border shadow-md hover:shadow-sm dark:shadow-none"}>
                <h3 className={"text-xl text-bold"}>Logout</h3>
                <div className={"px-2 w-full"}>
                    <p>Are you sure?</p>
                    <div className={"w-full flex flex-row justify-end items-center pt-2"}>
                        <Button variant="destructive" onClick={() => signOut()}>Logout</Button>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    )
})


LogoutModal.displayName = "LogoutModal"


export default LogoutModal;
