import { Button } from '#/components/ui/button'
import React from 'react'


interface AuthButtonWrapperProps {
    Icon: React.FC<React.SVGProps<SVGElement>>
    label: string
}


const AuthButtonWrapper = ({ Icon, label }: AuthButtonWrapperProps) => {
    return (
        <Button variant="outline" className={"w-full flex flex-row justify-center items-center gap-4"}>
            <Icon className={"w-6 h-6"} />
            <div className={""}>{label}</div>
        </Button>
    )
}


AuthButtonWrapper.displayName = "AuthButtonWrapper"


export default AuthButtonWrapper;
