import React from 'react'
import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';
import { getServerSession } from '#/actions/server/auth';



interface PageContentWrapperProps {
    children: React.ReactNode
    noParent?: boolean
    noNav?: boolean
}

const PageContentWrapper = async ({ children, noNav, noParent }: PageContentWrapperProps) => {
    const session = await getServerSession()
    return (
        <div className={"w-full h-screen min-h-fit"}>
            {!noNav && <Navbar session={session} />}
            {noParent ? children : <div className={"py-8 w-full h-[calc(100%-var(--nav-height)-var(--footer-height))] flex flex-col justify-start items-center"}>
                {children}
            </div>}
            {!noNav && <Footer />}
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
