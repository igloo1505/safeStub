import React from 'react'
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import Image from 'next/image'
import Navbar from '#/components/navigation/navbar'
import { WithSession } from '#/types/utility'
import { Button } from '#/components/ui/button'
import SignupCard from '#/components/auth/signupCard'




interface HeroProps extends WithSession {

}


const ImageBg = () => {
    return (
        <div className={"fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[-1]"}>
            <Image
                src={HeroImage}
                alt="Arena Image"
                fill
                className={"object-cover "}
            />
            <div className={"w-full h-full bg-black opacity-60 fixed"} />
        </div>
    )
}

const Hero = ({ session }: HeroProps) => {
    return (
        <div className={"w-full h-screen relative overflow-hidden"}>
            <Navbar session={session} container="absolute w-full h-fit text-white" />
            <div className={"flex flex-col justify-center items-center w-full h-full gap-4"}>
                <h1 className={"font-extrabold text-7xl text-white tracking-wider"}>Safe Stub</h1>
                <p className={"text-gray-300 max-w-[768px] text-center text-xl"}>Laoreet elementum nulla adipiscing lacus eu donec at varius vitae suscipit ornare consequat at dictumst nullam porta, tortor at ac.</p>
                <Button>Get Started</Button>
            </div>
            <ImageBg />
        </div>
    )
}


Hero.displayName = "Hero"


export default Hero;


