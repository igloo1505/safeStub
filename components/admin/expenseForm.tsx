"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { FormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminSettingsSchema } from './adminSettingsSchema';
import { Input } from '../ui/input';
import { Button } from '../ui/button';



interface ExpenseFormProps {

}




const ExpenseForm = (props: ExpenseFormProps) => {

    const form = useForm<z.infer<typeof adminSettingsSchema>>({
        resolver: zodResolver(adminSettingsSchema),
        defaultValues: {
            expense_name: "",
            expense_cost: "",
            expense_sources: [],
            expense_source_input: "",
            expense_priority: ""
        },
    })

    const handleSave = () => {

    }

    return (
        <Form {...form}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                <FormField
                    control={form.control}
                    name="expense_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Expense description
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="expense_source_input"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Source(s)</FormLabel>
                            <FormControl>
                                <Input placeholder="source" {...field} onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        let newVal = form.getValues("expense_sources")
                                        newVal.push(form.getValues("expense_source_input"))
                                        form.setValue("expense_sources", newVal)
                                        form.setValue("expense_source_input", "")
                                    }
                                }} />
                            </FormControl>
                            <FormDescription>
                                Sources & Providers
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className={"flex flex-row justify-start items-center gap-4 flex-wrap"}>
                {form.watch("expense_sources").map((s) => <div key={s} className={"text-primary"}>{s}</div>)}
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 mt-6 gap-6"}>
                <FormField
                    control={form.control}
                    name="expense_priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <FormControl>
                                <Input placeholder="priority" {...field} />
                            </FormControl>
                            <FormDescription>
                                Priority
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="expense_cost"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cost</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Approximate Cost
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Button variant="destructive">
                    Cancel
                </Button>
                <Button onClick={handleSave} type="submit">
                    Save
                </Button>
            </div>
        </Form>
    )
}


ExpenseForm.displayName = "ExpenseForm"


export default ExpenseForm;
