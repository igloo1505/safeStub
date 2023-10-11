import { Tailwind } from '@react-email/tailwind';
import React from 'react'
import { mailTailwindConfig } from '../mailOptions';
import EmailTemplateHead from './head';
import { Html } from '@react-email/html';
import { Preview } from '@react-email/preview';



interface EmailTemplateWrapperProps {
    children: React.ReactNode
    preview?: string
}

const EmailTemplateWrapper = ({ children, preview }: EmailTemplateWrapperProps) => {
    return (
        <Tailwind
            config={mailTailwindConfig}
        >
            <EmailTemplateHead />
            {preview && <Preview>{preview}</Preview>}
            <Html className={"bg-black text-white px-4 md:px-6 py-6 w-full flex flex-col justify-start items-center"}
                style={{
                    backgroundColor: "black",
                    color: "#fff"
                }}
            >
                {children}
            </Html>
        </Tailwind>
    )
}


EmailTemplateWrapper.displayName = "EmailTemplateWrapper"


export default EmailTemplateWrapper;
