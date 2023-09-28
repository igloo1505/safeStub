import React from 'react'



interface SidePanelContainerProps {
    children: React.ReactNode
}

/* <div className={"w-full h-[calc(100vh-80px)] flex flex-col justify-start items-center xl:grid grid-cols-[300px_1fr] relative"}> */
const SidePanelContainer = ({ children }: SidePanelContainerProps) => {
    return (
        <div className={"w-full h-[calc(100vh-80px)] flex flex-col justify-start items-center relative"}>
            {children}
        </div>
    )
}


SidePanelContainer.displayName = "SidePanelContainer"


export default SidePanelContainer;
