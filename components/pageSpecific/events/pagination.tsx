import { Button } from '#/components/ui/button'
import { upToN } from '#/utils/universal'
import { max } from 'date-fns'
import { Route } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'



interface PaginateButtonsProps {
    page: number
    maxPages: number
    formatUrl: string
}

interface PageButtonProps {
    index: number
    active: boolean
    maxPages: number
    maxShowButtons: number
    href: Route
}

const PageButton = ({ index, href, active, maxPages, maxShowButtons }: PageButtonProps) => {
    return (
        <Link href={href}>
            <Button>{index + 1}</Button>
        </Link>
    )
}

const formatURL = (formatUrl: string, n: number) => {
    return formatUrl.replace("NN", `${n}`) as Route
}

const PaginateButtons = ({ page, maxPages, formatUrl }: PaginateButtonsProps) => {
    const maxButtons = 10
    let r = Math.floor(maxButtons / 2)
    const shouldCenter = page > r
    const n = upToN(maxPages).filter((n) => {
        if (n === 0) {
            return true
        }
        if (shouldCenter && n > page - r && n < page + r) {
            return true
        }
        if (!shouldCenter && n < maxButtons) {
            return true
        }
        return false
    })
    return (
        <div className={"grid grid-rows-1 gap-2 mt-6"}
            style={{
                gridTemplateColumns: `repeat(${maxPages < maxButtons ? maxPages : maxButtons}, 1fr)`
            }}
        >{n.map((_n) => {
            return (<PageButton
                key={`p-button-${_n}`}
                href={formatURL(formatUrl, _n + 1)}
                index={_n}
                active={_n + 1 === page}
                maxPages={maxPages}
                maxShowButtons={maxButtons}
            />
            )
        })}</div>
    )
}


PaginateButtons.displayName = "PaginateButtons"


export default PaginateButtons;
