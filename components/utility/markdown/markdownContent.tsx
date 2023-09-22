"use client"
import React, { useEffect, useId } from 'react'
import "#/styles/markdown.scss"


interface MarkdownContentProps {
    html: string
}

const MarkdownContent = ({ html }: MarkdownContentProps) => {
    const id = useId()
    useEffect(() => {
        const markdown = document.getElementById(id)
        const lis = markdown?.querySelectorAll("li")
        if (!lis) return
        for (var i = 0; i < lis.length; i++) {
            for (var l = 0; l < lis.length; l++) {
                const li = lis.item(l)
                if (li && li.querySelectorAll("p").length > 0) {
                    li.classList.add("withParagraph")
                } else if (li) {
                    li.classList.add("noP")
                }
            }
        }
    }, [])
    return (
        <>
            <div id={id} className="markdownContent [&>p]:mb-3 [&>*:last-child]:mb-0  w-5/6 max-w-screen-md" dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}


MarkdownContent.displayName = "MarkdownContent"


export default MarkdownContent;
