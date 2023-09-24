import React from 'react'
import Navbar from '../navigation/navbar';
import { getServerSession } from '#/actions/server/auth';
import Footer from '../ui/footer/footer';
import clsx from 'clsx';



interface PageContentWrapperProps {
    children: React.ReactNode
    noParent?: boolean
    noNav?: boolean
    noFooter?: boolean
    classes?: {
        footer?: string
        body?: string
    }
}

const PageContentWrapper = async ({ children, classes, noFooter, noNav, noParent }: PageContentWrapperProps) => {
    const session = await getServerSession()
    return (
        <div className={"w-full h-screen min-h-fit"}>
            {!noNav && <Navbar session={session} />}
            {noParent ? children : <div className={clsx("py-8 w-full min-h-[calc(100%-var(--nav-height)-var(--footer-height))] flex flex-col justify-start items-center", classes?.body && classes.body)}>
                {children}
            </div>}
            {!noFooter && <Footer className={classes?.footer || ""} />}
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
