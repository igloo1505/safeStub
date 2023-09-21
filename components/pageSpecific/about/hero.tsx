import React from 'react'
import fansCheering from '#/public/assets/illustrations/fansCheering.svg'
import Image from 'next/image'
import clsx from 'clsx'
import AboutUsStats from './statSection'
import appConfig from "#/data/appConfig.json"

interface AboutUsHeroProps {

}



const AboutUsHeroImage = ({ className }: { className?: string }) => {
    return (
        <Image src={fansCheering} priority alt="Fans Cheering" className={clsx("w-2/3 h-auto", className && className)} />
    )
}

const AboutUsHero = (props: AboutUsHeroProps) => {
    return (
        <div className={"w-full max-w-screen-xl overflow-hidden h-fit flex flex-col justify-center items-center"}>
            <div className={"w-5/6 rounded-3xl bg-primary/40 px-6 pt-6 pb-8 md:py-12"}>
                <div className={"flex flex-col-reverse md:grid md:grid-cols-2 gap-4 place-items-center"}>
                    <div className={"flex flex-col justify-center items-center md:items-start gap-4 text-primary-foreground"}>
                        <div className={"text-primary"}>About Us</div>
                        <div className={"font-semibold text-black dark:text-white text-2xl text-center md:text-start"}>
                            {appConfig.aboutUs.hero.title}
                        </div>
                        <AboutUsHeroImage className={"inline-block md:hidden"} />
                        {appConfig.aboutUs.hero.body.map((b, i) => {
                            return (<div key={`about-${i}`} className={clsx("text-gray-900 dark:text-gray-100", i === appConfig.aboutUs.hero.body.length - 1 && "font-bold")}>
                                {b}
                            </div>)
                        })}
                    </div>
                    <AboutUsHeroImage className={"hidden md:inline-block"} />
                </div>
                <AboutUsStats container="grid grid-cols-3 w-full hidden xl:grid" />
            </div>
            <AboutUsStats container="flex flex-col justify-center max-w-[83%] items-start gap-8 xl:hidden" />
        </div >
    )
}


AboutUsHero.displayName = "AboutUsHero"


export default AboutUsHero;
