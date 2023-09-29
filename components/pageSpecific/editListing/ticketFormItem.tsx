import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import React from 'react'
import { EditTransactionFormType } from './editListingFormContext';



interface TicketFormItemProps {
    form: EditTransactionFormType
    index: number
    isLast: boolean
}

const TicketFormItem = ({ index, isLast, form }: TicketFormItemProps) => {
    return (
        <div className={"w-fit flex flex-col justify-center items-center gap-4 sm:grid sm:grid-rows-2 sm:grid-cols-[200px_200px] md:grid-rows-1 md:grid-cols-[200px_200px_200px_auto]"}>
            <FormField
                control={form.control}
                name="tickets"
                render={({ field }) => (
                    <>
                        <FormItem>
                            <FormLabel>Section</FormLabel>
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
        </div>
    )
}


TicketFormItem.displayName = "TicketFormItem"


export default TicketFormItem;
