"use client"
import LoadingIndicator from '#/components/ui/loadingIndicator';
import React from 'react'

const LoadingPage = () => {
    return (
        <div className={"bg-black bg-opacity-90 w-full h-full min-h-screen flex flex-col justify-center items-center relative"}>
            <LoadingIndicator />
        </div>
    )
}


LoadingPage.displayName = "LoadingPage"


export default LoadingPage;
