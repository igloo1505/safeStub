"use client"
import { Input } from '#/components/ui/input'
import { onEnter } from '#/hooks/onEnter'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DrawerSearchInput = ({ closeDrawer }: { closeDrawer: () => void }) => {
    const [value, setValue] = useState("")
    const router = useRouter()

    const search = () => {
        closeDrawer()
        const params = new URLSearchParams()
        params.set("query", value)
        router.push(`/events?${params.toString()}`)
    }

    return (
        <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => onEnter(e, search)}
            className={"w-[calc(100%-2rem)] mt-4"}
        />
    )
}


DrawerSearchInput.displayName = "DrawerSearchInput"


export default DrawerSearchInput;
