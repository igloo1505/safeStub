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


interface EmailTicketItemProps {
    seat: string
    row: string
    section: string
}

const EmailTicketItem = ({ seat, row, section }: EmailTicketItemProps) => {
    return (
        <Row className={"w-full"}>
            <Column className={"p-3"}>
                <Text className={"m-0"}>{section}</Text>
            </Column>
            <Column className={"p-3"}>
                <Text className={"m-0"}>{row}</Text>
            </Column>
            <Column className={"p-3"}>
                <Text className={"m-0"}>{seat}</Text>
            </Column>
        </Row>
    )
}


EmailTicketItem.displayName = "EmailTicketItem"


export default EmailTicketItem;
