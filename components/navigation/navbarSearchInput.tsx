"use client"
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import clsx from 'clsx';



const NavbarSearchInput = () => {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState("")
    return (
        <div className={"w-fit h-fit flex flex-row justify-center items-center relative"}>
            <Input
                type="search"
                id="searchNavInput"
                placeholder="Search"
                className={"text-black dark:text-white bg-gray-200 bg-opacity-30 dark:bg-black dark:bg-opacity-30 border-none focus-visible:ring-offset-0 placeholder:text-gray-400 pr-8"}
                value={value}
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
