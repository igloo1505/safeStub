import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '#/components/ui/select';
import { TRANSACTIONSTATUS } from '@prisma/client';
import React from 'react'



interface SelectActiveListingFilterProps {
    setActiveFilter: (v: TRANSACTIONSTATUS | null) => void

}

const SelectActiveListingFilter = ({ setActiveFilter }: SelectActiveListingFilterProps) => {
    const items: { value: TRANSACTIONSTATUS | "all", label: string }[] = [
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
    ]

    return (
        <Select onValueChange={(value: string) => setActiveFilter(value === "all" ? null : value as TRANSACTIONSTATUS)}>
            <SelectTrigger className="w-[180px]">
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
