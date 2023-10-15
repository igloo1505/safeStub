import { KeyboardEventHandler } from "react"

export const phoneInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,<>/?;:'\"\\|]}[{=+-_)(*&^%$#@!)".indexOf(e.key) !== -1) {
        e.preventDefault()
        e.stopPropagation()
        return
    }
}
