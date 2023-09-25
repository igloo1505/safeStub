import React from 'react'



interface ProfileContentProps {

}

const ProfileContent = (props: ProfileContentProps) => {
    return (
        <div className={"hidden group-[.content-profile]/profileContainer:flex"}>
            Profile Content
        </div>
    )
}


ProfileContent.displayName = "ProfileContent"


export default ProfileContent;
