import { Tailwind } from '@react-email/tailwind';
import React from 'react'
import { mailTailwindConfig } from '../mailOptions';
import EmailTemplateHead from './head';
import { Html } from '@react-email/html';
import { Container } from '@react-email/container';
import { Preview } from '@react-email/preview';
import { Body } from "@react-email/components"
import { container, main } from '../templates/emailStyles';


interface EmailTemplateWrapperProps {
    children: React.ReactNode
    preview?: string
}

const EmailTemplateWrapper = ({ children, preview }: EmailTemplateWrapperProps) => {
    return (
        <Html>
            <EmailTemplateHead />
            {preview && <Preview>{preview}</Preview>}
            <Body style={main}>
                <Container style={container}>
                    {children}
                </Container>
            </Body>
        </Html>
    )
}


EmailTemplateWrapper.displayName = "EmailTemplateWrapper"


export default EmailTemplateWrapper;
