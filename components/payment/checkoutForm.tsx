'use client'
import type { StripeError } from '@stripe/stripe-js'
import "#/styles/checkout.scss"
import * as React from 'react'
import {
    useStripe,
    useElements,
    PaymentElement,
    Elements,
} from '@stripe/react-stripe-js'
import { getAppConfig } from '#/utils/getAppConfig'
import { formatAmountForDisplay } from '#/utils/money/stripe/stripeHelpers'
import StripeTestCards from './stripeTestCards'
import { createPaymentIntent } from '#/app/actions/stripe'
import getStripe from '#/utils/money/stripe/getStripe'
import { Input } from '../ui/input'
import { stripeElementsAppearance } from '#/styles/stripeElementsAppearance'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { client } from '#/trpc/client'
import { getSession, useSession } from 'next-auth/react'
const configData = getAppConfig()

const config = configData.payments


/* PRIORITY: Make sure to mark tickets as 'sale pending' or and apply appropriate statuses to everyone involved in the transaction once the payment was accepted. */
/* Stripe webhook docs and dashboard: https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local */
/* PRIORITY: Integrate the webhook api route with Stripe to respond to the status's appropriately without requiring future user input. */


const StripeForm = ({ amount, ticketIds }: { amount: number, ticketIds: number[] }) => {
    const [input, setInput] = React.useState<{
        cardholderName: string
    }>({
        cardholderName: '',
    })
    const [paymentType, setPaymentType] = React.useState<string>('')
    const [payment, setPayment] = React.useState<{
        status: 'initial' | 'processing' | 'error'
    }>({ status: 'initial' })
    const [errorMessage, setErrorMessage] = React.useState<string>('')

    const stripe = useStripe()
    const router = useRouter()
    const elements = useElements()

    const PaymentStatus = ({ status }: { status: string }) => {
        console.log("status: ", status)
        switch (status) {
            case 'processing':
            case 'requires_payment_method':
            case 'requires_confirmation':
                return <h2>Processing...</h2>

            case 'requires_action':
                return <h2>Authenticating...</h2>

            case 'succeeded':
                return <h2>Payment Succeeded 🥳</h2>

            case 'error':
                return (
                    <>
                        <h2>Error 😭</h2>
                        <p className="error-message">{errorMessage}</p>
                    </>
                )

            default:
                return null
        }
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        })

        /* elements?.update({ amount: input.averagedTotal * 100 }) */
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault()
            let session = await getSession()
            if (!session?.user.id) {
                return router.push("/auth/signin")
            }
            // Abort if form isn't valid
            if (!e.currentTarget.reportValidity() || !elements || !stripe) return

            setPayment({ status: 'processing' })

            const { error: submitError } = await elements.submit()

            if (submitError) {
                console.log("submitError: ", submitError)
                setPayment({ status: 'error' })
                setErrorMessage(submitError.message ?? 'An unknown error occurred')
                return
            }

            // Create a PaymentIntent with the specified amount.
            const { client_secret: clientSecret } = await createPaymentIntent(
                amount
            )
            // Use your card Element with other Stripe.js APIs
            const { error: confirmError } = await stripe.confirmPayment({
                elements,
                clientSecret,
                redirect: "if_required",
                confirmParams: {
                    /* return_url: `${window.location.origin}/checkout/success`, */
                    payment_method_data: {
                        billing_details: {
                            name: input.cardholderName,
                        },
                    },
                },
            })


            if (confirmError) {
                setPayment({ status: 'error' })
                setErrorMessage(confirmError.message ?? 'An unknown error occurred')
            } else {
                client.setTicketsPurchased.mutate({
                    ticketIds,
                    purchaserId: session.user.id,
                    purchaseAmount: amount
                })
            }
        } catch (err) {
            const { message } = err as StripeError
            setPayment({ status: 'error' })
            setErrorMessage(message ?? 'An unknown error occurred')
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={"w-full flex flex-col justify-center items-center"}
            >
                <StripeTestCards />
                <fieldset className="elements-style w-[min(560px,calc(100vw-4rem))] gap-3">
                    <legend>Your payment details:</legend>
                    {paymentType === 'card' ? (
                        <Input
                            placeholder="Cardholder name"
                            className="elements-style mt-2"
                            type="Text"
                            name="cardholderName"
                            onChange={handleInputChange}
                            required
                        />
                    ) : null}
                    <div className="FormRow elements-style my-3">
                        <PaymentElement
                            onChange={(e) => {
                                setPaymentType(e.value.type)
                            }}
                        />
                    </div>
                </fieldset>
                <div className={"w-[min(560px,calc(100vw-4rem))] flex flex-row justify-end items-center"}>
                    <Button
                        className="elements-style-background"
                        type="submit"
                        disabled={
                            !['initial', 'succeeded', 'error'].includes(payment.status) ||
                            !stripe
                        }
                    >
                        Confirm {formatAmountForDisplay(amount, config.currency)}
                    </Button>
                </div>
            </form>
            <PaymentStatus status={payment.status} />
        </>
    )
}

export const CheckoutForm = ({ amount, ticketIds }: { amount: number, ticketIds: number[] }) => {
    return (
        <Elements
            stripe={getStripe()}
            options={{
                appearance: stripeElementsAppearance,
                currency: config.currency,
                mode: 'payment',
                amount: Math.floor(amount * 100)
            }}
        >
            <StripeForm
                ticketIds={ticketIds}
                amount={amount}
            />
        </Elements>
    )
}
