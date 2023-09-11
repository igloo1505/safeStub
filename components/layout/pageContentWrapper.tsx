import React from 'react'
import Navbar from '../navigation/navbar';
import { getServerSession } from '#/actions/server/auth';
import Footer from '../ui/footer/footer';



interface PageContentWrapperProps {
    children: React.ReactNode
    noParent?: boolean
    noNav?: boolean
    noFooter?: boolean
}

const PageContentWrapper = async ({ children, noFooter, noNav, noParent }: PageContentWrapperProps) => {
    const session = await getServerSession()
    return (
        <div className={"w-full h-screen min-h-fit"}>
            {!noNav && <Navbar session={session} />}
            {noParent ? children : <div className={"py-8 w-full h-[calc(100%-var(--nav-height)-var(--footer-height))] flex flex-col justify-start items-center"}>
                {children}
            </div>}
            {!noFooter && <Footer />}
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
