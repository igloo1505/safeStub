import React from 'react'



interface SidePanelContainerProps {
    children: React.ReactNode
}

const SidePanelContainer = ({ children }: SidePanelContainerProps) => {
    return (
        <div className={"w-full h-[calc(100vh-80px)] grid grid-cols-[300px_1fr] relative"}>
            {children}
        </div>
    )
}


SidePanelContainer.displayName = "SidePanelContainer"


export default SidePanelContainer;
