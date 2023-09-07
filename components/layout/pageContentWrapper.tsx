import React from 'react'
import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';



interface PageContentWrapperProps {
    children: React.ReactNode
}

const PageContentWrapper = ({ children }: PageContentWrapperProps) => {
    return (
        <div className={"w-full h-screen min-h-fit"}>
            <Navbar />
            <div className={"my-8 w-full h-[calc(100%-var(--nav-height)-var(--footer-height))] flex flex-col justify-start items-center"}>
                {children}
            </div>
            <Footer />
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
