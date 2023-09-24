import { Help } from '#/.contentlayer/generated'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '#/components/ui/accordion'
import React from 'react'
import "#/styles/markdown.scss"
import MarkdownContent from '#/components/utility/markdown/markdownContent'


interface HelpCenterSearchResultCardProps {
    item: Help
}

const HelpCenterSearchResultCard = ({ item }: HelpCenterSearchResultCardProps) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={item._id} className={"group/helpResult"}>
                <AccordionTrigger className={"px-4 bg-secondary border-b border-opacity-0 group-data-[state=open]/helpResult:border-opacity-50 group-data-[state=open]/helpResult:border-b-gray-400 dark:group-data-[state=open]/helpResult:border-b-gray-700 text-secondary-foreground rounded-tl-md rounded-tr-md"}>{item.title}</AccordionTrigger>
                <AccordionContent className={"bg-secondary text-secondary-foreground border-border px-4 rounded-bl-sm rounded-br-sm"}>
                    <MarkdownContent className={"w-full h-fit"} html={item.body.html} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}


HelpCenterSearchResultCard.displayName = "HelpCenterSearchResultCard"


export default HelpCenterSearchResultCard;
