import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardFooter } from '#/components/ui/card';
import React from 'react'
import ProfileItemCard from './cardContainer';
import { VERIFICATIONSTATUS } from '@prisma/client';
import clsx from 'clsx';
import Link from 'next/link';
import { WithClassName } from '#/types/utility';



interface IdentityVerificationStatusCardProps extends WithClassName {
    verified: VERIFICATIONSTATUS
    delay: number
    show: boolean
}

const verifiedMap: { [k in VERIFICATIONSTATUS]: { text: string, classes: string } } = {
    Verified: {
        text: "Verified",
        classes: "text-green-500 dark:text-green-400 -green-500 dark:-green-400"
    },
    Unverified: {
        text: "Not yet verified",
        classes: "text-red-500 dark:text-red-400 border-red-500 dark:border-red-400"
    },
    Pending: {
        text: "Pending",
        classes: "text-blue-500 dark:text-blue-400 border-blue-500 dark:border-blue-400"
    }
}

const IdentityVerificationStatusCard = ({ verified, show, className, delay }: IdentityVerificationStatusCardProps) => {
    return (
        <ProfileItemCard
            title="Identity Verification"
            description="StubHub utilizes Authenticate to verify our members."
            footer={<div className={"pb-0"}>{`Click `}<Link href="/verifyIdentity" className={"text-sky-500 dark:text-sky-400"}>here</Link>{` to become verified.`}</div>
            }
            className={className}
            delay={delay}
            show={show}
        >
            <div className={"w-full h-full flex justify-center items-center"}>
                <div className={"grid gap-4 grid-cols-[1fr_2fr] w-full flex-grow"}>
                    <div className={"w-fit h-full py-2 font-semibold"}>Status</div>
                    <div className={clsx("w-full h-full px-4 py-2 rounded-md border", verifiedMap[verified].classes)}>{verifiedMap[verified].text}</div>
                </div>
            </div>
        </ProfileItemCard>
    )
}


IdentityVerificationStatusCard.displayName = "IdentityVerificationStatusCard"


export default IdentityVerificationStatusCard;
