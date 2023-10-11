import React from 'react'
import { Head } from '@react-email/head';
import { Font } from '@react-email/font';


interface EmailTemplateHeadProps {

}

const EmailTemplateHead = (props: EmailTemplateHeadProps) => {
    return (
        <Head>
            <Font
                fontFamily="Lexand Giga"
                fallbackFontFamily="Arial"
                webFont={{
                    url: 'https://fonts.googleapis.com/css2?family=Lexend+Giga',
                    format: 'truetype',
                }}
                fontWeight={400}
                fontStyle="normal"
            />
            <Font
                fontFamily="Lexand Giga Bold"
                fallbackFontFamily="Arial"
                webFont={{
                    url: 'https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@700',
                    format: 'truetype',
                }}
                fontWeight={700}
                fontStyle="normal"
            />
        </Head>
    )
}


EmailTemplateHead.displayName = "EmailTemplateHead"


export default EmailTemplateHead;
