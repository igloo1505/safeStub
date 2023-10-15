"use client"
import React from 'react'
import ProfileItemCard from './cardContainer';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '#/components/ui/form';
import { Input } from '#/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '#/components/ui/button';
import { WithClassName } from '#/types/utility';
import { UserProfileDetails } from '../../profilePageContainer';
import { client } from '#/trpc/client';
import { useToast } from '#/components/ui/use-toast';
import { contactInformationSchema } from '#/types/contactInformationSchema';
import { z } from 'zod';
import { phoneInputKeyDown } from '#/lib/listeners/phoneInputKeyDown';

interface ContactInformationProfileCardProps extends WithClassName {
    delay: number
    show: boolean
    user: NonNullable<UserProfileDetails>
}




const ContactInformationProfileCard = ({ className, show, delay, user }: ContactInformationProfileCardProps) => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof contactInformationSchema>>({
        resolver: zodResolver(contactInformationSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            phone: user?.phone ? `${user.phone}` : "",
            id: user.id
        },
    })

    const onSubmit = async () => {
        await client.updateUser.mutate(form.getValues())
        toast({
            title: "Updated",
            description: "Your contact information was updated successfully."
        })
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
                                    <Input placeholder="Phone" {...field} type="tel"
                                        onKeyDown={phoneInputKeyDown}
                                    />
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
