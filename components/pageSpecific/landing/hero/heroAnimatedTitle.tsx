"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'


const HeroAnimatedTitle = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        let em = document.getElementById("hero-container")
        if (em) {
            em.classList.add("isLoaded")
        }
        animate()
    }, [])
    return (
        <h1 className={"font-extrabold text-[11vw] md:text-8xl text-white tracking-wider"}>{"Safe Stub".split("").map((c, i) => <span key={`title-${i}`} className={"title-char opacity-0 scale-0 translate-y-8"}>{c}</span>)}</h1>
    )
}


HeroAnimatedTitle.displayName = "HeroAnimatedTitle"


const animate = () => {
    let tl = gsap.timeline()
    tl.to(".title-char", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.15,
        stagger: 0.08
    })
}

export default HeroAnimatedTitle;
