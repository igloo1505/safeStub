import React from 'react'



interface ProfileSidePanelProps {

}

const SidePanelLabel = ({ children }: { children: string }) => {
    return (
        <h2 className={"font-bold text-lg w-full text-start"}>{children}</h2>
    )
}

const SidePanelSeparator = () => {
    return <div className={"w-full h-[1px] bg-muted-foreground/60 dark:bg-muted-foreground"} />
}

const ProfileSidePanel = (props: ProfileSidePanelProps) => {
    return (
        <div className={"w-[300px] h-full top-[80px] left-0 bg-secondary px-6 py-4 rounded-tr-lg rounded-tb-lg flex flex-col justify-start items-center space-y-3"}>
            <SidePanelLabel>My Account</SidePanelLabel>
            <SidePanelSeparator />
        </div>
    )
}


ProfileSidePanel.displayName = "ProfileSidePanel"


export default ProfileSidePanel;
