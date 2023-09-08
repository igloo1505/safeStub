import Image from "next/image"
import HeroImage from "#/public/assets/stock/SFArena.jpg"
import { WithSession } from "#/types/utility"
import Navbar from "#/components/navigation/navbar"
import { Button } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import Link from "next/link"



interface HeroProps extends WithSession {

}

const HeroRight = () => {
    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <div className={"w-10/12 h-2/3 rounded-lg overflow-hidden shadow-sm"}>
                <Image src={HeroImage} alt="Arena Image" className={"w-full h-full object-cover"} />
            </div>
        </div>
    )
}


const HeroLeft = () => {
    return (
        <div className={"w-full h-full flex flex-col justify-center items-center"}>
            <div className={"flex flex-col justify-start items-start w-fit h-fit gap-4"}>
                <h1 className={"text-7xl font-bold tracking-wider"}>Safe <br /> Stub</h1>
                <p className={"text-2xl text-gray-700 dark:text-gray-300 opacity-90"}>Putting tickets back in fans hands</p>
                <div className={"flex flex-col justify-center items-start gap-2 w-full"}>
                    <div className="flex max-w-sm items-center space-x-2 w-[min(90%,600px)] md:w-[600px]">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit" className={"whitespace-nowrap"}>Learn More</Button>
                    </div>
                    <p className={"text-gray-700 dark:text-gray-300 text-sm pl-1"}>Learn more about our <Link href="/aboutUs" className={"font-semibold"}>Privacy Policy here</Link></p>
                </div>

            </div>

        </div>
    )
}

const Hero = ({ session }: HeroProps) => {
    return (
        <div className={"w-full h-screen relative overflow-hidden bg-background"}>
            <Navbar session={session} container="absolute w-full h-fit" />
            <div className={"w-full h-full pt-16 grid grid-cols-2"}>
                <HeroLeft />
                <HeroRight />
            </div>
        </div>
    )
}


Hero.displayName = "Hero"


export default Hero;

