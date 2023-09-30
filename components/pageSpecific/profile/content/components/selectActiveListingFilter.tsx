import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '#/components/ui/select';
import { TRANSACTIONSTATUS } from '@prisma/client';
import clsx from 'clsx';
import React from 'react'

interface DropdownItem {
    value: TRANSACTIONSTATUS | "all" | string
    label: string
}

interface SelectActiveListingFilterProps {
    setActiveFilter: (v: TRANSACTIONSTATUS | null) => void
    extraItems?: DropdownItem[]
    className?: string
}

const SelectActiveListingFilter = ({ setActiveFilter, className, extraItems = [] }: SelectActiveListingFilterProps) => {
    const items: DropdownItem[] = [
        {
            value: "all",
            label: "All"
        },
        {
            value: "forSale",
            label: "For Sale"
        },

        {
            value: "complete",
            label: "Complete"
        },
        {
            value: "inProgress",
            label: "In Progress"
        },
        {
            value: "idVerificationFailed",
            label: "Verification Failed"
        },
        {
            value: "awaitingIdVerification",
            label: "Awaiting ID Verification"
        },
        ...extraItems
    ]

    return (
        <Select onValueChange={(value: string) => setActiveFilter(value === "all" ? null : value as TRANSACTIONSTATUS)}>
            <SelectTrigger className={clsx("w-[180px]", className && className)}>
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    {items.map((item) => {
                        return <SelectItem key={`select-${item.value}`} value={item.value}>{item.label}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


SelectActiveListingFilter.displayName = "SelectActiveListingFilter"


export default SelectActiveListingFilter;
