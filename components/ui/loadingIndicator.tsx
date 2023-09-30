"use client"
import React from 'react'
import { Bars } from 'react-loader-spinner'



const LoadingIndicator = () => {
    return (
        <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}


LoadingIndicator.displayName = "LoadingIndicator"


export default LoadingIndicator;
