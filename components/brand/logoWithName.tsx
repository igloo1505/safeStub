import { LucideProps } from 'lucide-react'
import React from 'react'
import Logo from './logo'
import clsx from 'clsx'



interface LogoWithNameProps {
    text?: string
    container?: string
    icon?: LucideProps
}

const LogoWithName = (props: LogoWithNameProps) => {
    const { icon, container, text } = props
    return (
        <div className={"flex flex-row justify-start items-center gap-2 my-2"}>
            <Logo {...icon} className={clsx("w-8 h-8", icon?.className && icon.className)} />
            <h3 className={"font-semibold tracking-wide text-lg"}>
                Safe Stub
            </h3>
        </div>
    )
}


LogoWithName.displayName = "LogoWithName"


export default LogoWithName;
