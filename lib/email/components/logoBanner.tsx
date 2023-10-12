import React from 'react'
import { Heading } from "@react-email/heading";
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import { getBaseUrl } from '../../../utils/getBaseUrl';
import { logoSection, logoText } from '../templates/emailStyles';
import { Column } from '@react-email/column';


interface EmailLogoBannerProps {

}

const EmailLogoBanner = (props: EmailLogoBannerProps) => {
    return (
        <Section style={logoSection}>
            <Column style={{
                width: '32px',
                height: '32px'
            }}>
                <Img src={`${getBaseUrl()}/assets/logos/logoTransparentBackground.png`}
                    width="32"
                    height="32"
                />
            </Column>
            <Column
            >
                <Heading
                    as="h1"
                    style={logoText}
                >SafeStub</Heading>
            </Column>
        </Section>
    )
}


EmailLogoBanner.displayName = "EmailLogoBanner"


export default EmailLogoBanner;
