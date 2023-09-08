import { isTablet } from "react-device-detect"
export const htmlEm = () => {
    return document.querySelector("html")
}
export const toggleDarkmode = () => {
    if (typeof window === "undefined") return;
    let em = htmlEm()
    if (!em) return
    em.classList.toggle("dark")
    // TODO: Handle cookie here too...
}


const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);


export const canShowPWANotification = (): { show: boolean, position: "top" | "bottom" | "unknown" | "none" } => {
    const show = Boolean(isIos() && !isInStandaloneMode())
    return { show, position: show ? isTablet ? "top" : "bottom" : "none" }
}
