import React from 'react'
import { PaymentMethodList, SaleFormType } from './saleFormContext'
import SlidingFormCard from './slidingFormCard'
import { SaleCardEventInfo, SaleCardTitle } from './step1'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '#/components/ui/form'
import { Input } from '#/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import Link from 'next/link'
import { SingleEventReturned } from '#/types/query'



interface SalesFormStepThreeProps {
    event: NonNullable<SingleEventReturned>
    form: SaleFormType
}

const SalesFormStepThree = ({ form, event }: SalesFormStepThreeProps) => {
    return (
        <SlidingFormCard step={3} >
            <SaleCardTitle>Set Your Price</SaleCardTitle>
            <SaleCardEventInfo event={event} />
            <div className={"flex flex-col gap-4 justify-center items-start md:grid md:grid-cols-[200px_300px] md:gap-8"}>
                <FormField
                    control={form.control}
                    name="pricePerTicket"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What&apos;s your price per ticket?</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="Per Ticket" {...field} onChange={(e) => {
                                    let split = e.target.value.split(".")
                                    if (split.length > 1 && split[1].length > 2) {
                                        return
                                    }
                                    field.onChange(e)
                                }} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="payoutMethod"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Payout Method</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value as unknown as string}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {PaymentMethodList.map((method) => {
                                        return (
                                            <SelectItem key={`method-${method.value}`} value={method.value}>{method.label}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                You can manage payment methods in your{" "}
                                <Link href="/settings" className={"text-blue-500 dark:text-blue-400"}>settings</Link>.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </SlidingFormCard>
    )
}


SalesFormStepThree.displayName = "SalesFormStepThree"


export default SalesFormStepThree;
