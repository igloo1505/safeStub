import React from 'react'
import SlidingFormContainer, { maxStepSale } from './slidingFormCard';
import { SingleEventReturned } from '#/types/query';
import { SaleFormType } from './saleFormContext';
import { SaleCardTitle } from './step1';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';



interface SalesFormStepTwoProps {
    /* event: NonNullable<SingleEventReturned> */
    form: SaleFormType
}


const SalesFormStepTwo = ({ form }: SalesFormStepTwoProps) => {
    return (
        <SlidingFormContainer step={2} maxStep={maxStepSale} >
            <SaleCardTitle>Tell Us About Your Tickets</SaleCardTitle>
            <div className={"w-full flex flex-col justify-between items-center gap-4 sm:grid sm:grid-rows-2 sm:grid-cols-[200px_200px] md:grid-rows-1 md:grid-cols-[200px_200px_200px]"}>
                <FormField
                    control={form.control}
                    name="section"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seat</FormLabel>
                            <FormControl>
                                <Input placeholder="Section" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="row"
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>Row</FormLabel>
                            <FormControl>
                                <Input placeholder="Row" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="seat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Seat Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Seat" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </SlidingFormContainer>
    )
}


SalesFormStepTwo.displayName = "SalesFormStepTwo"


export default SalesFormStepTwo;
