import React from 'react'
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Text } from "@react-email/text";
import { Link } from '@react-email/link';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import EmailTemplateWrapper from '../../components/emailTemplateWrapper';
import EmailTicketTable from '../../components/sales/ticketTable';
import { formatDateLong } from '../../../../lib/formatting/dates';
import { MailOptions } from 'nodemailer/lib/smtp-transport';
import { universalMailOptions } from '../../nodeMailer';
import { hr, link, paragraph } from '../emailStyles';
import EmailLogoBanner from '../../components/logoBanner';
import { getBaseUrl } from '../../../../utils/getBaseUrl';
import { ticketListSuccessDummyData } from '../../testData/ticketListingSuccess';


export interface TicketsListedSuccessfullyEmailProps {
    username: string
    tickets: { seat: string, row: string, section: string }[]
    confirmationId: string
    event: {
        description: string
        date: Date | string
    }
}


const TicketsListedSuccessfullyEmail = (props: TicketsListedSuccessfullyEmailProps) => {
    const { username, event, tickets } = ticketListSuccessDummyData
    return (
        <EmailTemplateWrapper preview="Your tickets were listed successfully.">
            <EmailLogoBanner />
            <Section style={{
                width: "100%",
                padding: "0 40px"
            }}>
                <Hr style={hr} />
            </Section>
            <Section style={{
                padding: "0rem 1rem"
            }}>
                <Heading
                    style={{
                        width: "100%",
                        textAlign: "center"
                    }}
                    as="h4">{`Congratulations ${username}!`}</Heading>
                <Container>
                    <Text style={paragraph}>{`The following items have been listed successfully for the ${event.description} on ${formatDateLong(event.date)}`}</Text>
                </Container>
                <EmailTicketTable
                    eventDescription={event.description}
                    eventDate={event.date}
                    tickets={tickets} />
                <Text style={paragraph}>You can view your active listings by clicking <Link
                    style={link}
                    href={`${getBaseUrl()}/profile?t=listings`}
                    className={"bg-primary text-primary-foreground"}
                >here</Link>.</Text>
            </Section>
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
