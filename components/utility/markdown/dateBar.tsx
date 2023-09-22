import { day } from '#/lib/formatting/dates'
import React from 'react'



interface MarkdownDateBarProps {
    date: string | Date | undefined | null
    leadingText?: string
}

const MarkdownDateBar = ({ date, leadingText }: MarkdownDateBarProps) => {
    if (!date) return null
    let d = day(date).format("MMMM Do, YYYY")
    return (
        <div className={"text-gray-500 dark:text-gray-400 text-sm h-fit flex flex-row justify-end items-center mb-2 w-5/6 max-w-screen-md"}>{`${leadingText || ""} ${d}`}</div>
    )
}


MarkdownDateBar.displayName = "MarkdownDateBar"


export default MarkdownDateBar;
