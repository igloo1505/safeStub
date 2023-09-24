"use client"
import { Input } from '#/components/ui/input';
import React, { useState } from 'react'



interface HelpCenterSearchBarProps {
    className: string
}

const HelpCenterSearchBar = ({ className }: HelpCenterSearchBarProps) => {
    const [value, setValue] = useState("")
    const submitHelpSearch = () => {

    }
    return (
        <Input placeholder="Find help" value={value} onChange={(e) => setValue(e.target.value)} className={className} />
    )
}


HelpCenterSearchBar.displayName = "HelpCenterSearchBar"


export default HelpCenterSearchBar;
