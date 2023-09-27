"use client"
import React from 'react'
import ProfileItemCard from './cardContainer';
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '#/components/ui/button';
import { WithClassName } from '#/types/utility';

interface ContactInformationProfileCardProps extends WithClassName {
    delay: number
    show: boolean
}


interface ContactInformationType {
    firstName: string
    lastName: string
    email: string
    phone: number
}

export const contactInformationSchema = z.object({
    firstName: z.string().default(""),
    lastName: z.string().default(""),
    email: z.string().email("This must be a valid email.").default(""),
    phone: z.number().int().default(5555555555)
})


export type ContactInformationFormType = z.infer<typeof contactInformationSchema>

const ContactInformationProfileCard = ({ className, show, delay }: ContactInformationProfileCardProps) => {
    const form = useForm<z.infer<typeof contactInformationSchema>>({
        resolver: zodResolver(contactInformationSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: 5555555555,

        },
    })

    const onSubmit = () => {
        console.log(`Handle form submit`)
    }


    return (
        <ProfileItemCard
            delay={delay}
            show={show}
            title="Contact Information" className={className}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone" {...field} type="tel" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className={"w-full"}>
                        <Button type="submit" className={"mt-2"}>Submit</Button>
                    </div>
                </form>
            </Form>
        </ProfileItemCard>
    )
}


ContactInformationProfileCard.displayName = "ContactInformationProfileCard"


export default ContactInformationProfileCard;
