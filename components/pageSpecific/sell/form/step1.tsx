import React, { useEffect } from 'react'
import SlidingFormContainer, { maxStepSale } from './slidingFormCard';
import { SingleEventReturned } from '#/types/query';
import { formatLocation } from '#/lib/formatting/teamNames';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { SaleFormType } from './saleFormContext';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { Separator } from '#/components/ui/separator';
dayjs.extend(advancedFormat)


export const SaleCardTitle = ({ children }: { children: string }) => {
    return <div className={"w-full flex flex-col justify-center items-center"}>
        <h2 className={"text-2xl text-foreground tracking-wide text-center md:text-start"}>{children}</h2>
        <Separator />
    </div>
}


interface SaleFormStepOneProps {
    event: NonNullable<SingleEventReturned>
    form: SaleFormType
}

const SaleFormStepOne = ({ event, form }: SaleFormStepOneProps) => {
    let quant = form.watch("quantity")
    useEffect(() => {
        if (quant < 1) {
            form.setValue("quantity", 1)
        }
    }, [quant])

    return (
        <SlidingFormContainer step={1} maxStep={maxStepSale} anchor>
            <SaleCardTitle>Tell Us About Your Tickets</SaleCardTitle>
            <div className={"w-full flex flex-col-reverse md:flex-row md:gap-4"}>
                <div className={"w-full flex flex-col justify-start items-start"}>
                    <div className={"font-semibold"}>{event.title}</div>
                    <div className={"text-sm text-foreground/80"}>{dayjs(event.date).format("MMM Do")}</div>
                    <div className={"text-sm text-foreground/80"}>{dayjs(event.date).format("dddd [at] h:mm A")}</div>
                </div>
                <div className={"w-full flex flex-col justify-start items-start"}>
                    <div className={"whitespace-break-spaces sm:whitespace-nowrap"}>{event.description}</div>
                    <div className={"text-sm text-foreground/80"}>{formatLocation(event.arena.location)}</div>
                </div>
            </div>
            <div className={"w-full flex flex-row justify-start items-start"}>
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How many tickets do you have?</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="quantity" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </SlidingFormContainer>
    )
}


SaleFormStepOne.displayName = "SaleFormStepOne"


export default SaleFormStepOne;
