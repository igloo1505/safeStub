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


interface TicketTableProps {
    tickets: { seat: string, section: string, row: string, [k: string]: any }[]
}

const EmailTicketTable = ({ tickets }: TicketTableProps) => {
    return (
        <Container className={"w-full"}>
            <Row className={"w-full"}>
                <Column className={"p-3"}>
                    <Text className={"m-0"}>Section</Text>
                </Column>
                <Column className={"p-3"}>
                    <Text className={"m-0"}>Row</Text>
                </Column>
                <Column className={"p-3"}>
                    <Text className={"m-0"}>Seat</Text>
                </Column>
            </Row>
            {tickets.map((t, i) => <EmailTicketItem key={`ticket-${i}`} {...t} />)}
        </Container>
    )
}


EmailTicketTable.displayName = "TicketTable"


export default EmailTicketTable;
