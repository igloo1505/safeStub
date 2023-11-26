"use client"
import PostForSaleConfirmation from '#/components/pageSpecific/sell/form/postForSaleConfirmation';
import { PayoutMethodEnum, SaleFormObjectType, SaleFormType, saleFormSchema } from '#/components/pageSpecific/sell/form/saleFormContext';
import SlidingFormContainer from '#/components/pageSpecific/sell/form/slidingFormContainer'
import SaleFormStepOne from '#/components/pageSpecific/sell/form/step1';
import SalesFormStepTwo from '#/components/pageSpecific/sell/form/step2';
import SalesFormStepThree from '#/components/pageSpecific/sell/form/step3';
import { Form } from '#/components/ui/form';
import { SingleEventReturned } from '#/types/query';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form';


interface SellPageContainerProps {
    event: NonNullable<SingleEventReturned>
    userId: string
}


const defaultTicket = {
    row: "",
    section: "",
    seat: ""
}

const SellPageContainer = ({ event, userId }: SellPageContainerProps) => {
    const id = useId()
    const saleForm = useForm<SaleFormObjectType>({
        resolver: zodResolver(saleFormSchema),
        defaultValues: {
            quantity: 1,
            pricePerTicket: 100,
            payoutMethod: PayoutMethodEnum.paypal,
            tickets: [defaultTicket]
        },
    })

    const n = saleForm.watch("quantity")


    useEffect(() => {
        let ts: (typeof defaultTicket)[] = []
        for (var i = 0; i < n; i++) {
            ts.push(defaultTicket)
        }
        saleForm.setValue("tickets", ts)
    }, [n])


    return (
        <div className={"min-h-[calc(100vh-var(--nav-height))] w-5/6 max-w-screen-lg flex flex-col justify-start items-center"} id={id}>
            <SlidingFormContainer maxStep={4}>
                <Form {...saleForm}>
                    <SaleFormStepOne event={event} form={saleForm} containerId={id} />
                    <SalesFormStepTwo form={saleForm} containerId={id} />
                    <SalesFormStepThree form={saleForm} event={event} containerId={id} />
                    <PostForSaleConfirmation form={saleForm} event={event} userId={userId} containerId={id} />
                </Form>
            </SlidingFormContainer>
        </div>
    )
}


SellPageContainer.displayName = "SellPageContainer"


export default SellPageContainer;
