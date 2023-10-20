"use client"
import type { serverClient } from '#/trpc/serverClient'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { EditTransactionFormObjectType, PayoutMethodEnum, editTransactionForm } from './editListingFormContext'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/ui/form'
import { Input } from '#/components/ui/input'
import EditTransactionTicketsSection from './ticketsFormSection'
import EditListingFormHeader from './EditListingFormHeader'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select'
import { PaymentMethodList } from '../sell/form/saleFormContext'
import Link from 'next/link'



interface EditListingFormProps {
    item: NonNullable<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>>
}


const EditListingForm = ({ item }: EditListingFormProps) => {

    const tickets = item?.ticketGroups?.map((t) => t.tickets).flat(2).map(t => ({
        seat: t.seat,
        row: t.row,
        section: t.section
    }))
    const form = useForm<EditTransactionFormObjectType>({
        resolver: zodResolver(editTransactionForm),
        defaultValues: {
            quantity: 1,
            pricePerTicket: typeof item.listedPrice === "undefined" ? 0 : Boolean(typeof item?.listedPrice !== "undefined" && tickets?.length) ? parseFloat((item?.listedPrice / (tickets?.length || 0)).toFixed(2)) : 0,
            payoutMethod: PayoutMethodEnum.paypal,
            tickets
        },
    })

    return (
        <div className={"w-5/6 h-fit flex flex-col justify-center items-start space-y-3"}>
            <Form {...form}>
                <EditTransactionTicketsSection
                    form={form}
                />
                <EditListingFormHeader>Payment</EditListingFormHeader>
                <div className={"pl-6 flex flex-col md:flex-row justify-start items-start md:gap-8"}>
                    <FormField
                        control={form.control}
                        name="pricePerTicket"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price per ticket</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="price" {...field} />
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
                                            <SelectValue placeholder="Select a verified email to display" />
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
            </Form>
        </div>
    )
}


EditListingForm.displayName = "EditListingForm"


export default EditListingForm;
