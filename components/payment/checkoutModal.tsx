import React from 'react'
import { CheckoutForm } from './checkoutForm'
import ModalOverlay from '../notifications/modalOverlay'



interface CheckoutModalProps {
    amount: number
    open?: boolean
    close: () => void
    ticketIds: number[]
}

const CheckoutModal = ({ amount, open, close, ticketIds }: CheckoutModalProps) => {
    return (
        <ModalOverlay open={Boolean(open)} onClick={close}>
            <div className={"flex flex-col justify-center items-start space-y-2 px-4 py-3 rounded-md bg-popover text-popover-foreground min-w-[300px] border border-border shadow-md hover:shadow-sm dark:shadow-none"}>
                {open && <CheckoutForm ticketIds={ticketIds} amount={amount} />}
            </div>
        </ModalOverlay>
    )
}


CheckoutModal.displayName = "CheckoutModal"


export default CheckoutModal;
