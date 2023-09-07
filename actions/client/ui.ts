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
