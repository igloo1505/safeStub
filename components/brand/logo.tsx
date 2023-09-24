import React, { SVGProps } from 'react'



/* const Logo = (props: SVGProps<SVGSVGElement>) => { */
/* return (<svg width="1em" height="1em" viewBox="0 0 200 229" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} > <path d="M178.571 100h-10.714V67.857C167.857 30.447 137.411 0 100 0 62.59 0 32.143 30.446 32.143 67.857V100H21.429C9.599 100 0 109.598 0 121.429v85.714c0 11.83 9.598 21.428 21.429 21.428H178.57c11.831 0 21.429-9.598 21.429-21.428v-85.714c0-11.831-9.598-21.429-21.429-21.429zm-46.428 0H67.857V67.857c0-17.723 14.42-32.143 32.143-32.143s32.143 14.42 32.143 32.143V100z" className={"fill-primary"} /> <path d="M58.222 141.833h85.556V185.5H58.222v-43.667zm106.945 21.834c0 6.029 5.745 10.916 12.833 10.916v21.834c0 6.029-5.746 10.916-12.833 10.916H36.833c-7.087 0-12.833-4.887-12.833-10.916v-21.834c7.088 0 12.833-4.887 12.833-10.916 0-6.03-5.745-10.917-12.833-10.917v-21.833C24 124.887 29.746 120 36.833 120h128.334c7.087 0 12.833 4.887 12.833 10.917v21.833c-7.088 0-12.833 4.887-12.833 10.917zm-12.834-23.653c0-3.015-2.872-5.458-6.416-5.458H56.083c-3.544 0-6.416 2.443-6.416 5.458v47.305c0 3.015 2.872 5.459 6.416 5.459h89.834c3.544 0 6.416-2.444 6.416-5.459v-47.305z" fill="#fefefe" /> </svg>) */
/* } */



export const Logo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 201 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M179.23 100h-10.714V67.857C168.516 30.447 138.069 0 100.658 0c-37.41 0-67.857 30.446-67.857 67.857V100H22.087c-11.83 0-21.429 9.598-21.429 21.429v85.714c0 11.83 9.599 21.428 21.429 21.428H179.23c11.83 0 21.428-9.598 21.428-21.428v-85.714c0-11.831-9.598-21.429-21.428-21.429zm-46.429 0H68.516V67.857c0-17.723 14.42-32.143 32.142-32.143 17.724 0 32.143 14.42 32.143 32.143V100z"
                className="fill-primary"
            />
            <path
                d="M56.556 141.5h88.888v45H56.556v-45zM167.667 164c0 6.213 5.969 11.25 13.333 11.25v22.5c0 6.213-5.969 11.25-13.333 11.25H34.333C26.97 209 21 203.963 21 197.75v-22.5c7.364 0 13.333-5.037 13.333-11.25S28.363 152.75 21 152.75v-22.5c0-6.213 5.97-11.25 13.333-11.25h133.334c7.364 0 13.333 5.037 13.333 11.25v22.5c-7.364 0-13.333 5.037-13.333 11.25zm-13.334-24.375c0-3.107-2.984-5.625-6.666-5.625H54.333c-3.682 0-6.666 2.518-6.666 5.625v48.75c0 3.107 2.984 5.625 6.666 5.625h93.334c3.682 0 6.666-2.518 6.666-5.625v-48.75z"
                className="fill-white"
            />
        </svg>
    )
}

Logo.displayName = "Logo"
export default Logo;
