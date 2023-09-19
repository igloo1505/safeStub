import React from 'react'
import SlidingFormCard, { maxStepSale } from './slidingFormCard';
import { SaleFormType } from './saleFormContext';
import { SaleCardTitle } from './step1';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import DynamicIcon from '#/components/ui/dynamicIcon';
import clsx from 'clsx';


interface SalesFormStepTwoProps {
    /* event: NonNullable<SingleEventReturned> */
    form: SaleFormType
}


const TicketFormItem = ({ form, index, isLast }: { form: SaleFormType, index: number, isLast?: boolean }) => {
    const handleIconClick = () => {
        if (isLast) {
            form.setValue("tickets", [...form.getValues("tickets"), {
                row: "",
                seat: "",
                section: ""
            }])
        }
        if (!isLast) {
            form.setValue("tickets", form.getValues("tickets").filter((t, i) => i !== index))
        }
    }

    return (
        <div className={"w-full flex flex-col justify-between items-center gap-4 sm:grid sm:grid-rows-2 sm:grid-cols-[200px_200px] md:grid-rows-1 md:grid-cols-[200px_200px_200px_auto]"}>
            <FormField
                control={form.control}
                name="tickets"
                render={({ field }) => (
                    <>
                        <FormItem>
                            <FormLabel>Seat</FormLabel>
                            <FormControl>
                                <Input placeholder="Section" {...form.register(`tickets.${index}.section`)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </>
                )}
            />
            <FormField
                control={form.control}
                name="tickets"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Row</FormLabel>
                        <FormControl>
                            <Input placeholder="Row" {...form.register(`tickets.${index}.row`)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="tickets"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Seat Number</FormLabel>
                        <FormControl>
                            <Input placeholder="Seat" {...form.register(`tickets.${index}.seat`)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className={"relative w-12 h-full flex flex-col justify-end py-2"}>
                <DynamicIcon onClick={handleIconClick} name={isLast ? "plus" : "minus"} className={clsx("rounded-lg", isLast ? "bg-blue-500 dark:bg-blue-400" : "bg-red-500 dark:bg-red-400")} />
            </div>
        </div>
    )
}


const SalesFormStepTwo = ({ form }: SalesFormStepTwoProps) => {
    const tickets = form.watch("tickets") || []
    return (
        <SlidingFormCard step={2} >
            <SaleCardTitle>Tell Us About Your Tickets</SaleCardTitle>
            {tickets.map((t, i) => {
                return <TicketFormItem key={`ticket-form-item-${i}`} form={form} index={i} isLast={i === tickets.length - 1} />
            })}
        </SlidingFormCard>
    )
}


SalesFormStepTwo.displayName = "SalesFormStepTwo"


export default SalesFormStepTwo;
