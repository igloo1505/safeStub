import React from 'react'
import { PropagateLoader } from 'react-spinners'



const LoadingIndicator = () => {
    return (
        <PropagateLoader color="var(--primary)" />
    )
}


LoadingIndicator.displayName = "LoadingIndicator"


export default LoadingIndicator;
