import { SingleEventReturned } from '#/types/query';
import Image from 'next/image';
import React from 'react'



interface SingleEventTeamLogoBoxProps {
    teams: NonNullable<SingleEventReturned>['participants']
}


const imageClasses = "w-36 h-36"

const SingleEventTeamLogoBox = ({ teams }: SingleEventTeamLogoBoxProps) => {
    return (
        <div className={"w-full h-fit flex justify-center items-center"}>
            <div className={"flex flex-row justify-center items-center w-[19rem] gap-4"}>
                <Image className={imageClasses} src={`/assets/teams/logos/${teams[0].nickname}.svg`} alt="Team Logo" width={250} height={250} />
                <Image className={imageClasses} src={`/assets/teams/logos/${teams[1].nickname}.svg`} alt="Team Logo" width={250} height={250} />
            </div>
        </div>
    )
}


SingleEventTeamLogoBox.displayName = "SingleEventTeamLogoBox"


export default SingleEventTeamLogoBox;
