import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Route } from 'next';
import Link from 'next/link';
import React from 'react'



interface OtherNavigationSelectProps {
    userId?: string | null
}


interface NavItemType {
    label: string
    value: string
    href: Route
}



const OtherNavigationSelect = ({ userId }: OtherNavigationSelectProps) => {

    const eventTypes: NavItemType[] = [
        {
            label: "About us",
            value: "aboutus",
            href: "/aboutUs"
        },
        {
            label: "How it works",
            value: "howItWorks",
            href: "/aboutUs"
        },

        {
            label: "FAQ",
            value: "faq",
            href: "/helpCenter"
        },
        {
            label: "Get Started",
            value: "getStarted",
            href: userId ? "/events" : "/auth/signin"
        },
    ]
    return (
        <Select>
            <SelectTrigger className="w-fit px-3 [&>svg]:ml-2">
                <SelectValue
                    placeholder="Navigation"
                />
            </SelectTrigger>
            <SelectContent>
                {eventTypes.map((t) => {
                    return <SelectItem key={t.value} value={t.value}>
                        <Link href={t.href}>{t.label}</Link>
                    </SelectItem>
                })}
            </SelectContent>
        </Select>
    )
}


OtherNavigationSelect.displayName = "OtherNavigationSelect"


export default OtherNavigationSelect;
