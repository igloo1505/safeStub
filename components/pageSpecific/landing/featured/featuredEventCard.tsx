import { TicketIcon } from "lucide-react"
import { cn } from "#/utils/universal"
import { Button } from "#/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "#/components/ui/card"
import { serverClient } from "#/trpc/serverClient"
import { formatEventDate } from "#/lib/formatting/dates"
import Image from "next/image"
import Link from "next/link"
import { Route } from "next"
import { formatLocation, formatTeamName } from "#/lib/formatting/teamNames"


interface CardProps extends React.ComponentProps<typeof Card> {
    event: Awaited<ReturnType<typeof serverClient.getUpcomingEvents>>[number]
}

const logoClasses = "w-24 h-24"

const FeaturedEventCard = ({ className, event, ...props }: CardProps) => {
    const homeIcon = `/assets/teams/logos/${formatTeamName(event.participants[0].nickname)}.svg`
    const awayIcon = event.participants.length >= 2 ? `/assets/teams/logos/${formatTeamName(event.participants[1].nickname)}.svg` : homeIcon
    return (
        <Card className={cn("w-full grid grid-cols-1 grid-rows-[126px_auto_1fr_auto] @container", className)} {...props}>
            <div className={"mt-6"}>
                <div className={"flex flex-row gap-4 justify-center items-center"}>
                    <Image src={homeIcon} className={logoClasses} alt="homeIcon" width={200} height={200} />
                    <Image src={awayIcon} className={logoClasses} alt="awayIcon" width={200} height={200} />
                </div>
            </div>
            <CardHeader>
                <CardTitle className={"w-full text-center @[400px]:text-start"}>{event.description}</CardTitle>
                <CardDescription className={"w-full text-center @[400px]:text-start"}>{formatEventDate(event.date)}</CardDescription>
                <div className={"w-full mt-1 text-sm text-muted-foreground text-center @[400px]:text-start flex flex-row justify-center @[400px]:justify-start gap-x-1 items-center flex-wrap"} style={{
                    marginTop: "0px !important"
                }}>
                    {event.arena.name && <div className={"inline-block"}>
                        {`${event.arena.name} `}{" "}
                    </div>}
                    <div className={"inline-block"}>
                        {formatLocation(event.arena.location)}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className={"text-center @[400px]:text-start"}>
                    Vitae vel posuere, orci rhoncus tincidunt, ut amet malesuada molestie imperdiet id sed eleifend nullam curabitur arcu porttitor quam sed molestie neque semper cras ex dui
                </div>
            </CardContent>
            <CardFooter className={"h-fit w-full @[400px]:w-fit flex flex-col justify-center items-center"}>
                <Link href={`/event/${event.id}` as Route} className={"w-full @[400px]:w-fit"}>
                    <Button className="w-full @[400px]:w-fit">
                        <TicketIcon className="mr-2 h-4 w-4" /> Find my tickets
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}


export default FeaturedEventCard

