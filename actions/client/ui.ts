import axios from "axios";
import { isTablet } from "react-device-detect"
export const htmlEm = () => {
    return document.querySelector("html")
}
export const toggleDarkmode = async () => {
    // if (typeof window === "undefined") return;
    // let em = htmlEm()
    // let willBeDark = !em?.classList.contains("dark")
    // if (!em) return
    // em.classList.toggle("dark")
    // await axios({ method: "post", url: "/api/util/setDarkmode", data: { darkMode: willBeDark } })
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
