"use client"
import { SaleFormObjectType, SaleFormType, saleFormSchema } from '#/components/pageSpecific/sell/form/saleFormContext';
import SlidingFormContainer from '#/components/pageSpecific/sell/form/slidingFormContainer'
import SaleFormStepOne from '#/components/pageSpecific/sell/form/step1';
import SalesFormStepTwo from '#/components/pageSpecific/sell/form/step2';
import { Form } from '#/components/ui/form';
import { SingleEventReturned } from '#/types/query';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'


interface SellPageContainerProps {
    event: NonNullable<SingleEventReturned>
}


const SellPageContainer = ({ event }: SellPageContainerProps) => {
    const saleForm = useForm<SaleFormObjectType>({
        resolver: zodResolver(saleFormSchema),
        defaultValues: {
            quantity: 1,
            seat: "",
            section: "",
            row: ""
        },
    })
    return (
        <div className={"min-h-[calc(100vh-var(--nav-height))] w-5/6 max-w-screen-lg flex flex-col justify-start items-center"}>
            <SlidingFormContainer maxStep={2}>
                <Form {...saleForm}>
                    <SaleFormStepOne event={event} form={saleForm} />
                    <SalesFormStepTwo form={saleForm} />
                </Form>
            </SlidingFormContainer>
        </div>
    )
}


SellPageContainer.displayName = "SellPageContainer"


export default SellPageContainer;
