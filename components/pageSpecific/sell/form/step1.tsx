import React, { useEffect } from 'react'
import SlidingFormCard, { maxStepSale } from './slidingFormCard';
import { PendingTicketList, SingleEventReturned } from '#/types/query';
import { formatLocation } from '#/lib/formatting/teamNames';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { SaleFormType } from './saleFormContext';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { Separator } from '#/components/ui/separator';
import clsx from 'clsx';
dayjs.extend(advancedFormat)


export const SaleCardTitle = ({ children }: { children: string }) => {
    return <div className={"w-full flex flex-col justify-center items-center"}>
        <h2 className={"text-2xl my-4 text-foreground tracking-wide text-center md:text-start"}>{children}</h2>
        <Separator />
    </div>
}




interface SaleFormStepOneProps {
    event: NonNullable<SingleEventReturned> | NonNullable<NonNullable<PendingTicketList>[number]["Event"]>
    form: SaleFormType
    containerId: string
}


export const SaleCardEventInfo = ({ event, className }: { event: SaleFormStepOneProps['event'], className?: string }) => {
    return (
        <>
            <div className={clsx("w-full flex flex-col-reverse md:flex-row md:gap-4", className && className)}>
                <div className={"w-full flex flex-col justify-start items-start whitespace-nowrap"}>
                    <div className={"font-semibold"}>{event.title}</div>
                    <div className={"text-sm text-foreground/80"}>{dayjs(event.date).format("MMM Do")}</div>
                    <div className={"text-sm text-foreground/80"}>{dayjs(event.date).format("dddd [at] h:mm A")}</div>
                </div>
                <div className={"w-full flex flex-col justify-start items-start"}>
                    <div className={"whitespace-break-spaces sm:whitespace-nowrap"}>{event.description}</div>
                    <div className={"text-sm text-foreground/80"}>{formatLocation(event.arena.location)}</div>
                </div>
            </div>
            <Separator />
        </>
    )
}

const SaleFormStepOne = ({ event, form, containerId }: SaleFormStepOneProps) => {
    let quant = form.watch("quantity")
    useEffect(() => {
        if (quant < 1) {
            form.setValue("quantity", 1)
        }
    }, [quant])

    return (
        <SlidingFormCard
            containerId={containerId}
            step={1}
            anchor
        >
            <SaleCardTitle>Tell Us About Your Tickets</SaleCardTitle>
            <SaleCardEventInfo event={event} />
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
        </SlidingFormCard>
    )
}


SaleFormStepOne.displayName = "SaleFormStepOne"


export default SaleFormStepOne;
