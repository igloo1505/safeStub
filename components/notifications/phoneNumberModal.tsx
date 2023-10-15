import React, { useState } from 'react'
import { closeNotification } from '#/state/slices/notifications'
import store, { RootState } from '#/state/store'
import { connect } from 'react-redux'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { client } from '#/trpc/client'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { phoneInputKeyDown } from '#/lib/listeners/phoneInputKeyDown'


const connector = connect((state: RootState, props: any) => ({
    open: state.notifications.modals.phoneInput,
    props: props
}))


interface PhoneNumberModalProps {
    open: boolean
}

const PhoneNumberModal = connector(({ open }: PhoneNumberModalProps) => {
    const [phoneValue, setPhoneValue] = useState("")
    const router = useRouter()
    const closeModal = (open: boolean) => {
        if (!open) {
            store.dispatch(closeNotification("phoneInput"))
        }
    }

    const updatePhoneNumber = async () => {
        const sesh = await getSession()
        if (!sesh?.user.id) {
            return router.push("/auth/signin")
        }
        await client.updateUser.mutate({
            id: sesh.user.id,
            phone: phoneValue
        })
        closeModal(false)
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(open) => closeModal(open)}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Contact Information</DialogTitle>
                    <DialogDescription>
                        In order to ensure that you&apos;re notified of potential buyer&apos;s as soon as possible, SafeStub requires a phone number to be available before being able to list tickets.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phoneInput" className="text-right">
                            Phone
                        </Label>
                        <Input
                            id="phoneInput"
                            value={phoneValue}
                            onChange={(e) => setPhoneValue(e.target.value)}
                            className="col-span-3"
                            onKeyDown={phoneInputKeyDown}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={updatePhoneNumber}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
})


PhoneNumberModal.displayName = "PhoneNumberModal"


export default PhoneNumberModal;
