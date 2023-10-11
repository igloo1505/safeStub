import React from 'react'
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Text } from "@react-email/text";
import { Link } from '@react-email/link';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import EmailTemplateWrapper from '../../components/emailTemplateWrapper';
import logo from "../../../../assets/icons/logoTransparentBg.png"
import EmailTicketTable from '../../components/sales/ticketTable';
import { formatDateLong } from '../../../../lib/formatting/dates';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import { universalMailOptions } from '../../nodeMailer';
import { ticketListSuccessDummyData } from '../../testData/ticketListingSuccess';


interface TicketsListedSuccessfullyEmailProps {
    username: string
    tickets: { seat: string, row: string, section: string }[]
    event: {
        description: string
        date: Date | string
    }
}


const TicketsListedSuccessfullyEmail = (props: TicketsListedSuccessfullyEmailProps) => {
    const { username, event, tickets } = ticketListSuccessDummyData
    return (
        <EmailTemplateWrapper preview="Your tickets were listed successfully.">
            <Section className={"w-full flex flex-row justify-center items-center gap-3"}>
                <Img src={logo.src} className={"h-[5rem] w-auto inline-block"}
                    width="200"
                    height="200"
                />
                <Container className={"w-fit h-full inline-flex justify-center items-center"}>
                    <Heading as="h1" className={"inline-block text-4xl"}>SafeStub</Heading>
                </Container>
            </Section>
            <Hr />
            <Heading as="h2">{`Congratulations! ${username}`}</Heading>
            <Text>{`The following items have been listed successfully for the ${event.description} on ${formatDateLong(event.date)}`}</Text>
            <EmailTicketTable tickets={tickets} />
            <Text>You can view your active listings by clicking <Link href={`${process.env.NEXTAUTH_URL}/profile?t=listings`}>here</Link>.</Text>
        </EmailTemplateWrapper>
    )
}


TicketsListedSuccessfullyEmail.displayName = "TicketsListedSuccessfullyEmail"


export default TicketsListedSuccessfullyEmail;



export const ticketListingSuccessOptions = ({ username, email }: { username: string, email: string }): MailOptions => {
    return {
        ...universalMailOptions,
        to: email,
        subject: `Congratulations ${username}. Your tickets have been posted.`
    }
}
