import React from 'react'
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import Image from 'next/image'


interface HeroProps {

}

const HeroLeft = () => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <Image src={HeroImage} alt="Arena Image" className={"w-full h-full object-cover"} />
        </div>
    )
}


const HeroRight = () => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>Hero Right</div>
    )
}

const Hero = (props: HeroProps) => {
    return (
        <div className={"w-full h-[calc(100vh-var(--nav-height))] grid grid-cols-[2fr_1fr]"}>
            <HeroLeft />
            <HeroRight />
        </div>
    )
}


Hero.displayName = "Hero"


export default Hero;
