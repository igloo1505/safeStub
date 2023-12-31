import React from 'react'
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import Image from 'next/image'
import Navbar from '#/components/navigation/navbar'
import { WithSession } from '#/types/utility'
import clsx from 'clsx'
import InstagramSocialIcon from '#/assets/social/instagram'
import FacebookSocialIcon from '#/assets/social/facebook'
import TwitterXSocialIcon from '#/assets/social/twitterX'
import appConfig from "#/data/appConfig.json"
import HeroAnimatedTitle from './heroAnimatedTitle'
import Link from 'next/link'
import GetStartedButton from './getStartedButton'
import Background from '../background'
import { buttonVariants } from '#/components/ui/button'



interface HeroProps extends WithSession {

}


const ImageBg = () => {

    /* <Image */
    /*     src={HeroImage} */
    /*     alt="Arena Image" */
    /*     fill */
    /*     priority */
    /*     className={"object-cover"} */
    /* /> */
    {/* <div className={"w-full h-full bg-black opacity-60 fixed"} /> */ }
    return (
        <div className={"fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[-1]"}>
            <Background className={"object-cover"} />
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
        <div className={"w-full h-screen relative overflow-hidden group/heroContainer"} id={"hero-container"}>
            <Navbar session={session} container={"w-full h-fit text-foreground absolute landscape:relative"} mobileContainer={"fixed landscape:relative"} />
            <div className={"w-full h-full flex justify-center items-center px-4"}>
                <div className={"flex flex-col justify-center items-center w-fit h-full gap-4"}>
                    <div className={"grid grid-cols-[1fr_auto_1fr] w-full place-items-center gap-2"}>
                        <div className={"h-[2px] bg-gray-300 bg-opacity-70 w-full origin-right scale-x-0 hero-label-line transition-[opacity,transform] duration-300 delay-1000 group-[.isLoaded]/heroContainer:scale-x-100"} />
                        <p className={"text-md text-[4vw] lg:text-2xl text-foreground opacity-0 transition-[opacity,transform] duration-300 translate-y-8 group-[.isLoaded]/heroContainer:translate-y-0  group-[.isLoaded]/heroContainer:opacity-100 delay-700"}>{appConfig.landing.subtitle}</p>
                        <div className={"h-[2px] bg-gray-300 bg-opacity-70 w-full origin-left scale-x-0 hero-label-line transition-[opacity,transform] duration-300 group-[.isLoaded]/heroContainer:scale-x-100 delay-1000"} />
                    </div>
                    <HeroAnimatedTitle />
                    <p className={"text-muted-foreground max-w-[768px] text-center text-[4vw] md:text-xl opacity-0 group-[.isLoaded]/heroContainer:opacity-100 transition-opacity duration-300 delay-1200"}>{appConfig.landing.slogan}</p>
                    <div className={"flex flex-row justify-center items-center gap-4 opacity-0 -translate-y-8 group-[.isLoaded]/heroContainer:translate-y-0 group-[.isLoaded]/heroContainer:opacity-100 transition-all duration-300 delay-1200"}>
                        <GetStartedButton userId={session?.user.id} />
                        <Link href="/aboutUs" className={buttonVariants({ variant: "secondary" })}>Learn More</Link>
                    </div>
                    <div className={"w-fit flex flex-row text-foreground justify-center items-center gap-4 mt-6 opacity-0 -translate-y-8 group-[.isLoaded]/heroContainer:translate-y-0 group-[.isLoaded]/heroContainer:opacity-100 transition-all duration-300 delay-1300"}>
                        <IconButton>
                            <FacebookSocialIcon className={"rounded-md w-8 h-8 transition-colors duration-300"} />
                        </IconButton>
                        <IconButton>
                            <InstagramSocialIcon className={"rounded-md w-8 h-8 transition-colors duration-300"} />
                        </IconButton>
                        <IconButton>
                            <TwitterXSocialIcon className={"rounded-md w-8 h-8 transition-colors duration-300"} />
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



