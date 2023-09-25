import Logo from '#/components/brand/logo';
import React from 'react'

const LoadingPage = () => {
    return (
        <div className={"bg-black bg-opacity-90 w-full h-full min-h-screen flex flex-col justify-center items-center relative"}>
            <Logo className={"animate-spin duration-500 w-24 h-auto"} />
        </div>
    )
}


LoadingPage.displayName = "LoadingPage"


export default LoadingPage;
