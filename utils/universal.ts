import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const upToN = (finish: number, start: number = 0) => {
    let val: number[] = []
    for (var i = start; i < finish; i++) {
        val.push(i)
    }
    return val
}
