import React from 'react'
import fansCheering from '#/public/assets/illustrations/fansCheering.svg'
import Image from 'next/image'
import clsx from 'clsx'
import AboutUsStats from './statSection'


interface AboutUsHeroProps {

}



const AboutUsHeroImage = ({ className }: { className?: string }) => {
    return (
        <Image src={fansCheering} alt="Fans Cheering" className={clsx("w-2/3 h-auto", className && className)} />
    )
}

const AboutUsHero = (props: AboutUsHeroProps) => {
    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center"}>
            <div className={"w-5/6 rounded-3xl bg-primary/40 px-6 pt-6 pb-8 md:py-12"}>
                <div className={"flex flex-col-reverse md:grid md:grid-cols-2 gap-4 place-items-center"}>
                    <div className={"flex flex-col justify-center items-center md:items-start gap-4 text-primary-foreground"}>
                        <div className={"text-primary"}>About Us</div>
                        <div className={"font-semibold text-black dark:text-white text-2xl text-center md:text-start"}>
                            Pretium vel eu convallis ut, eget pellentesque faucibus porttitor dictumst eros non fringilla vitae et.
                        </div>
                        <AboutUsHeroImage className={"inline-block md:hidden"} />
                        <div className={"text-gray-900 dark:text-gray-100"}>
                            Venenatis cursus dui magna eu dui id mus pharetra, eros dignissim viverra adipiscing phasellus venenatis aliquet, nullam tempor posuere elit etiam id nullam nam, sagittis tempor dui non iaculis. Sit nam dictum aenean, tempor vel est montes lectus nec dapibus nibh diam eleifend eget eu faucibus laoreet ac purus facilisis.
                        </div>
                    </div>
                    <AboutUsHeroImage className={"hidden md:inline-block"} />
                </div>
                <AboutUsStats container="grid grid-cols-3 w-full hidden md:grid" />
            </div>
            <AboutUsStats container="flex flex-col justify-center w-5/6 items-center gap-4 md:hidden" />
        </div>
    )
}


AboutUsHero.displayName = "AboutUsHero"


export default AboutUsHero;
