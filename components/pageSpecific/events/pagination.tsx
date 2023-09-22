"use client"
import { Button } from '#/components/ui/button'
import { backFromN, centerOnN, upToN } from '#/utils/universal'
import { Route } from 'next'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import React from 'react'



interface PaginateButtonsProps {
    page: number
    maxPages: number
    formatUrl: string
}

interface PageButtonProps {
    index: number
    href: Route
    router: AppRouterInstance
}

const PageButton = ({ index, href, router }: PageButtonProps) => {

    return (
        <Button
            onClick={() => {
                router.push(href)
            }}
            className={"w-full h-full"}
        >{index + 1}</Button>
    )
}

const formatURL = (formatUrl: string, n: number) => {
    return formatUrl.replace("NN", `${n}`) as Route
}

const PaginateButtons = ({ page, maxPages, formatUrl }: PaginateButtonsProps) => {
    const router = useRouter()
    const maxButtons = 10
    let n: number[] = [0]
    if (page <= maxButtons - maxButtons / 3) {
        n = n.concat(upToN(maxButtons, 1))
    } else if (page > maxButtons - maxButtons / 3 && page > maxPages - maxButtons + maxButtons / 3) {
        n = n.concat(backFromN(maxPages - 1, maxButtons - 1))
    } else {
        n = n.concat(centerOnN(page, maxButtons - 2, "start"))
        n.push(maxPages - 1)
    }
    return (
        <div className={"grid grid-rows-1 gap-2 mt-6"}
            style={{
                gridTemplateColumns: `repeat(${n.length}, 1fr)`
            }}
        >{n.map((_n) => {
            return (<PageButton
                key={`p-button-${_n}`}
                href={formatURL(formatUrl, _n + 1)}
                index={_n}
                router={router}
            />
            )
        })}</div>
    )
}


PaginateButtons.displayName = "PaginateButtons"


export default PaginateButtons;
