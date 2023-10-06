"use client"
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import clsx from 'clsx';
import { onEnter } from '#/hooks/onEnter';
import { usePathname, useRouter } from 'next/navigation';



const NavbarSearchInput = () => {
    const pathname = usePathname()
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState("")
    const router = useRouter()
    const submitQuery = () => {
        const params = new URLSearchParams()
        params.set("query", value)
        router.push(`/events?${params.toString()}`)
    }
    return (
        <div className={clsx("w-full md:w-5/6 max-w-lg h-fit flex flex-row justify-center items-center relative", pathname === "/" && "dark")}>
            <Input
                type="search"
                id="searchNavInput"
                placeholder="Search"
                className={clsx("text-black dark:text-white bg-gray-200 bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-70 border-none focus-visible:ring-offset-0 placeholder:text-gray-400 pr-8", pathname === "/" && "dark:bg-opacity-30")}
                value={value}
                onKeyDown={(e) => onEnter(e, submitQuery)}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <SearchIcon className={clsx("absolute right-2 pointer-events-none flex-shrink-0", focused ? "text-primary dark:text-white" : "text-gray-400")} />
        </div>
    )
}


NavbarSearchInput.displayName = "NavbarSearchInput"


export default NavbarSearchInput;
