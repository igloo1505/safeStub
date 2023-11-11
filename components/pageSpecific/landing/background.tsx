import React, { SVGProps } from 'react'



interface BackgroundProps extends SVGProps<SVGElement> {

}

const Background = (props: BackgroundProps) => {
    return (
        <div className={"w-full h-full"}
            style={{
                background: "linear-gradient(225deg, hsl(var(--primary)), hsl(var(--background)), hsl(var(--background)), hsl(var(--background)), hsl(var(--background)), hsl(var(--primary)))"
            }}
        />
    )
}


Background.displayName = "Background"


export default Background;
