import React from 'react'



interface LogoWithNameProps {

}

const LogoWithName = (props: LogoWithNameProps) => {
    return (
        <div>Logo with name</div>
    )
}


LogoWithName.displayName = "LogoWithName"


export default LogoWithName;
