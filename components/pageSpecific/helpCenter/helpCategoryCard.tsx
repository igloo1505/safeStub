import React from 'react'
import type data from "#/data/content/help/helpCategoryMap.json"
import Link from 'next/link'


interface HelpCenterCategoryCardProps {
    category: typeof data[keyof typeof data]
    k: keyof typeof data
}

const HelpCenterCategoryCard = ({ category, k }: HelpCenterCategoryCardProps) => {
    return (
        <Link href={`/helpCenter/category/${k}`}>
            <div className={"h-full bg-card px-4 py-6 rounded-lg border border-border w-full flex flex-col justify-start items-start hover:bg-card/70 transition-all duration-200 shadow-md hover:shadow-sm dark:shadow-none cursor-pointer"}>
                <h3 className={"font-bold text-lg text-card-foreground"}>{category.title}</h3>
                {category.subTitle && <h5 className={"text-base font-thin text-card-foreground/70"}>{category.subTitle}</h5>}
            </div>
        </Link>
    )
}


HelpCenterCategoryCard.displayName = "HelpCenterCategoryCard"


export default HelpCenterCategoryCard;
