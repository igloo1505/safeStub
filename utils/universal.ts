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

export const centerOnN = (n: number, length: number, prefer: "start" | "end" = "start") => {
    let d = [n]
    for (var i = 1; i < Math.floor((length + 1) / 2); i++) {
        d.push(n + i)
        d.unshift(n - i)
    }
    if (d.length < length) {
        if (prefer === "end") {
            d.push(d[d.length - 1] + 1)
        }
        if (prefer === "start") {
            d.unshift(d[0] - 1)
        }
    }
    return d
}

export const backFromN = (n: number, length: number) => {
    let d = [n]
    for (var j = 0; j < length - 1; j++) {
        d.unshift(d[0] - 1)
    }
    return d
}
