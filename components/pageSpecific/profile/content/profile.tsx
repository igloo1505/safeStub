import React from 'react'
import ContactInformationProfileCard from './components/contactInformationCard';
import IdentityVerificationStatusCard from './components/identifyVerificationStatusCard';
import { UserProfileDetails } from '../profilePageContainer';
import { VERIFICATIONSTATUS } from '@prisma/client';
import PlaceHolderCard from './components/placeHolderCard';
import clsx from 'clsx';



interface ProfileContentProps {
    user: UserProfileDetails
    show: boolean
}

const ProfileContent = ({ user, show }: ProfileContentProps) => {
    return (
        <div className={clsx("w-full min-h-full", show ? "grid" : "hidden")}>
            <div className={"grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 place-items-center h-fit w-full px-8 pb-8"}>
                <ContactInformationProfileCard
                    delay={50}
                    show={show}
                    className={clsx("group-[.content-profile]/profileContainer:opacity-100  group-[.content-profile]/profileContainer:scale-100 group-[.content-profile]/profileContainer:delay-500 preBounceIn")}
                />
                <div className={"grid w-full h-full grid-cols-1 grid-rows-[auto_auto] lg:grid-rows-2 gap-4"}>
                    <IdentityVerificationStatusCard
                        delay={100}
                        show={show}
                        className="group-[.content-profile]/profileContainer:opacity-100 group-[.content-profile]/profileContainer:scale-100"
                        verified={user?.idVerified as VERIFICATIONSTATUS} />
                    <PlaceHolderCard
                        delay={150}
                        show={show}
                        className="group-[.content-profile]/profileContainer:opacity-100 group-[.content-profile]/profileContainer:scale-100"
                        title="Some small status card" />
                </div>
            </div>
        </div>
    )
}


ProfileContent.displayName = "ProfileContent"


export default ProfileContent;
