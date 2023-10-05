import MatchupLogos from '#/components/ui/logos/matchupLogos'
import type { serverClient } from '#/trpc/serverClient'
import React from 'react'



interface ConfirmationHeadingProps {
    event: NonNullable<Awaited<ReturnType<typeof serverClient.getEvent>>>
}

const ConfirmationHeading = ({ event }: ConfirmationHeadingProps) => {
    return (
        <div className={"w-fit h-fit flex flex-col justify-center items-center gap-4"}>
            <h2 className={"font-bold tracking-wide text-[4vw] sm:text-2xl md:text-3xl"}>Congrations! Your ticket listing is live!</h2>
            <MatchupLogos
                teamNames={[event.participants?.[0]?.name, event.participants?.[1]?.name]}
                classes={{
                    icon: "max-h-[200px] w-fit",
                    container: "max-w-[min(83%,768px)]"
                }}
            />
        </div>
    )
}


ConfirmationHeading.displayName = "ConfirmationHeading"


export default ConfirmationHeading;
