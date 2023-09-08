import React from 'react'
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import Image from 'next/image'
import Navbar from '#/components/navigation/navbar'
import { WithSession } from '#/types/utility'
import { Button } from '#/components/ui/button'
import SignupCard from '#/components/auth/signupCard'
import DynamicIcon from '#/components/ui/dynamicIcon'
import { BrandIcons } from '#/components/ui/brandIcons'
import clsx from 'clsx'
import InstagramSocialIcon from '#/assets/social/instagram'
import FacebookSocialIcon from '#/assets/social/facebook'
import TwitterXSocialIcon from '#/assets/social/twitterX'
import Script from 'next/script'
import HeroAnimatedTitle from './heroAnimatedTitle'
import Link from 'next/link'




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


const IconButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={clsx("p-2 rounded-md bg-black bg-opacity-0 hover:bg-opacity-30 cursor-pointer transition-colors duration-300 group/iconButton", className && className)}>
            {children}
        </div>
    )
}

const Hero = ({ session }: HeroProps) => {
    return (
        <div className={"w-full h-screen relative overflow-hidden dark group/heroContainer"} id={"hero-container"}>
            <Script id="on-load-hero">
                {`let em = document.getElementById("hero-container");
if(em) {
em.classList.add("isLoaded")
}
`}
            </Script>
            <Navbar session={session} container="absolute w-full h-fit text-white" />
            <div className={"w-full h-full flex justify-center items-center"}>
                <div className={"flex flex-col justify-center items-center w-fit h-full gap-4"}>
                    <div className={"grid grid-cols-[1fr_auto_1fr] w-full place-items-center gap-2"}>
                        <div className={"h-[2px] bg-gray-300 bg-opacity-70 w-full origin-right scale-x-0 hero-label-line transition-transform duration-300 delay-1000 group-[.isLoaded]/heroContainer:scale-x-100"} />
                        <p className={"text-2xl text-white opacity-0 transition-all duration-300 translate-y-8 group-[.isLoaded]/heroContainer:translate-y-0  group-[.isLoaded]/heroContainer:opacity-100 delay-700"}>Putting tickets back in fans hands</p>
                        <div className={"h-[2px] bg-gray-300 bg-opacity-70 w-full origin-left scale-x-0 hero-label-line transition-transform duration-300 group-[.isLoaded]/heroContainer:scale-x-100 delay-1000"} />
                    </div>
                    <HeroAnimatedTitle />
                    <p className={"text-gray-300 max-w-[768px] text-center text-xl opacity-0 group-[.isLoaded]/heroContainer:opacity-100 transition-opacity duration-300 delay-1200"}>Laoreet elementum nulla adipiscing lacus eu donec at varius vitae suscipit ornare consequat at dictumst nullam porta, tortor at ac.</p>
                    <div className={"flex flex-row justify-center items-center gap-4"}>
                        <Link href="/auth/signin">
                            <Button className={"text-white"}>Get Started</Button>
                        </Link>
                        <Link href="/aboutUs" className={"bg-black transition-colors duration-300 bg-opacity-30 hover:bg-opacity-50 text-white rounded-lg px-4 py-2 border-primary border"}>Learn More</Link>
                    </div>
                    <div className={"w-fit flex flex-row text-white justify-center items-center gap-4 mt-6"}>
                        <IconButton>
                            <FacebookSocialIcon className={"fill-gray-200 w-8 h-8 group-hover/iconButton:fill-white transition-colors duration-300"} />
                        </IconButton>
                        <IconButton>
                            <InstagramSocialIcon className={"fill-gray-200 w-8 h-8 group-hover/iconButton:fill-white transition-colors duration-300"} />
                        </IconButton>
                        <IconButton>
                            <TwitterXSocialIcon className={"fill-gray-200 w-8 h-8 group-hover/iconButton:fill-white transition-colors duration-300"} />
                        </IconButton>
                    </div>
                </div>
            </div>
            <ImageBg />
        </div>
    )
}


Hero.displayName = "Hero"


export default Hero;



