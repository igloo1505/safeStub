import React from 'react'
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Text } from "@react-email/text";
import { Link } from '@react-email/link';
import { Row } from '@react-email/row';
import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { Img } from '@react-email/img';
import EmailTicketItem from './ticketItem';
import { tableContainer, tableRow, tableColumn, tableText } from '../../templates/emailStyles';


interface TicketTableProps {
    tickets: { seat: string, section: string, row: string, [k: string]: any }[]
    eventDescription: string
    eventDate: string | Date
}

const EmailTicketTable = ({ tickets, eventDescription, eventDate }: TicketTableProps) => {
    return (
        <Container style={tableContainer}>
            {tickets.map((t, i) => <EmailTicketItem key={`ticket-${i}`}
                eventDescription={eventDescription}
                eventDate={eventDate}
                {...t} />)}
        </Container>
    )
}


EmailTicketTable.displayName = "TicketTable"


export default EmailTicketTable;
