import { BellRing, Check, TicketIcon } from "lucide-react"
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
import { Switch } from "#/components/ui/switch"
import { Event, Prisma } from "@prisma/client"
import { getUpcomingEvents } from "#/lib/events/getUpcomingEvents"
import { serverClient } from "#/trpc/serverClient"
import { formatEventDate } from "#/lib/formatting/dates"
import Image from "next/image"


interface CardProps extends React.ComponentProps<typeof Card> {
    event: Awaited<ReturnType<typeof serverClient.getUpcomingEvents>>[number]
}

const logoClasses = "w-24 h-24"

const FeaturedEventCard = ({ className, event, ...props }: CardProps) => {
    console.log("event: ", event)
    const homeIcon = `/assets/teams/logos/${event.participants[0].nickname}.svg`
    const awayIcon = event.participants.length >= 2 ? `/assets/teams/logos/${event.participants[1].nickname}.svg` : homeIcon
    return (
        <Card className={cn("w-full grid grid-cols-1 grid-rows-[126px_auto_1fr_auto]", className)} {...props}>
            <div className={"mt-6"}>
                <div className={"flex flex-row gap-4 justify-center items-center"}>
                    <Image src={homeIcon} className={logoClasses} alt="homeIcon" width={200} height={200} />
                    <Image src={awayIcon} className={logoClasses} alt="awayIcon" width={200} height={200} />
                </div>
            </div>
            <CardHeader>
                <CardTitle>{event.description}</CardTitle>
                <CardDescription>{formatEventDate(event.date)}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    Vitae vel posuere, orci rhoncus tincidunt, ut amet malesuada molestie imperdiet id sed eleifend nullam curabitur arcu porttitor quam sed molestie neque semper cras ex dui
                </div>
            </CardContent>
            <CardFooter className={"h-fit"}>
                <Button className="w-full md:w-fit">
                    <TicketIcon className="mr-2 h-4 w-4" /> Find my tickets
                </Button>
            </CardFooter>
        </Card>
    )
}


export default FeaturedEventCard




/* {notifications.map((notification, index) => ( */
/*     <div */
/*         key={index} */
/*         className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" */
/*     > */
/*         <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */
/*         <div className="space-y-1"> */
/*             <p className="text-sm font-medium leading-none"> */
/*                 {notification.title} */
/*             </p> */
/*             <p className="text-sm text-muted-foreground"> */
/*                 {notification.description} */
/*             </p> */
/*         </div> */
/*     </div> */
/* ))} */
