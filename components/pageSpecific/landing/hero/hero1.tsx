import React from 'react'
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import Image from 'next/image'
import Navbar from '#/components/navigation/navbar'
import { WithSession } from '#/types/utility'
import { Button } from '#/components/ui/button'




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
            <div className={"w-full h-full grid grid-cols-[600px_1fr] px-16"}>
                <div className={"w-full h-full flex flex-col justify-center items-center"}>
                    <div className={"flex flex-col justify-start items-start gap-6"}>
                        <h1 className={"text-7xl font-extrabold tracking-wide text-white"}>Safe Stub</h1>
                        <p className={"text-2xl text-gray-300"}>Putting tickets back in fans hands</p>
                        <div className={"flex flex-row justify-center items-center gap-4 py-2"}>
                            <Button className={"text-white"}>Get Started</Button>
                            <Button variant="ghost" className={"text-white"}>Learn More</Button>
                        </div>
                    </div>
                </div>
                <div className={""}></div>
            </div>
            <ImageBg />
        </div>
    )
}


Hero.displayName = "Hero"


export default Hero;
