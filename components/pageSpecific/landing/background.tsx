import React, { SVGProps } from 'react'



interface BackgroundProps extends SVGProps<SVGElement> {

}

const Background = (props: BackgroundProps) => {
    return (
        <div className={"w-full h-full"}
            style={{
                /* background: "linear-gradient(to right top, #16A34A, #1A7A39, #185428, #123019, #020F03);" */
                backgroundImage: "linear-gradient(to right top, #16A34A, #19843D, #196731, #164B25, #123019, #0F2514, #0B1B0D, #020F03, #020F03, #020F03, #020F03, #020F03)"
            }}
        />
    )
}


Background.displayName = "Background"


export default Background;
