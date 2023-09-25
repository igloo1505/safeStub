import React from 'react'


interface SettingsProfileContentProps {


}

const SettingsProfileContent = (props: SettingsProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-settings]/profileContainer:flex"}>
            Active Listings Content
        </div>
    )
}


SettingsProfileContent.displayName = "SettingsProfileContent"


export default SettingsProfileContent;

