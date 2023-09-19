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
import React from 'react'
import { useForm } from 'react-hook-form';


interface SellPageContainerProps {
    event: NonNullable<SingleEventReturned>
}


const SellPageContainer = ({ event }: SellPageContainerProps) => {
    const saleForm = useForm<SaleFormObjectType>({
        resolver: zodResolver(saleFormSchema),
        defaultValues: {
            quantity: 1,
            /* seat: "", */
            /* section: "", */
            /* row: "", */
            pricePerTicket: 100,
            payoutMethod: PayoutMethodEnum.paypal,
            tickets: [{
                row: "",
                section: "",
                seat: ""
            }]
        },
    })

    return (
        <div className={"min-h-[calc(100vh-var(--nav-height))] w-5/6 max-w-screen-lg flex flex-col justify-start items-center"}>
            <SlidingFormContainer maxStep={4}>
                <Form {...saleForm}>
                    <SaleFormStepOne event={event} form={saleForm} />
                    <SalesFormStepTwo form={saleForm} />
                    <SalesFormStepThree form={saleForm} event={event} />
                    <PostForSaleConfirmation form={saleForm} event={event} />
                </Form>
            </SlidingFormContainer>
        </div>
    )
}


SellPageContainer.displayName = "SellPageContainer"


export default SellPageContainer;
