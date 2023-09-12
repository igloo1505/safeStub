import { KeyboardEvent } from "react"


export const onEnter = <T>(e: KeyboardEvent<T>, cb: () => void, preventDefault?: "onEnter" | "all" | undefined) => {
    if (preventDefault === "all") {
        e.preventDefault()
        e.stopPropagation()
    }
    if (e.key === "Enter") {
        if (preventDefault === "onEnter") {
            e.preventDefault()
            e.stopPropagation()
        }
        cb()
    }
}
