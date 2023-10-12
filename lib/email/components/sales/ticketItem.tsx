import React from 'react'
import { Text } from "@react-email/text";
import { Row } from '@react-email/row';
import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { dateAndTime } from '../../../../lib/formatting/dates';


interface EmailTicketItemProps {
    seat: string
    row: string
    section: string
    eventDescription: string
    eventDate: string | Date
}

const EmailTicketItem = ({ seat, row, section, eventDescription, eventDate }: EmailTicketItemProps) => {
    const { day, dow, time } = dateAndTime(eventDate)
    return (
        <Container
            style={{
                width: "600px",
                height: "fit-content",
                backgroundColor: "#e5e7eb",
                margin: "0.5rem 0",
                borderRadius: "8px",
                padding: "0.75rem"
            }}>
            <Column style={{
                margin: "0"
            }}>
                <Row style={{
                    margin: "0"
                }}>
                    <Text style={{
                        margin: "0"
                    }}>{eventDescription}</Text>
                </Row>
                <Row style={{
                    margin: "0"
                }}>
                    <Text style={{
                        margin: "0"
                    }}>{`${dow}, ${day}`}</Text>
                </Row>
                <Row style={{
                    margin: "0"
                }}>
                    <Text style={{
                        margin: "0"
                    }}>{time}</Text>
                </Row>
            </Column>
            <Column style={{
                /* width: "70%", */
                /* height: "fit-content" */
            }}>
                <Column style={{
                    marginRight: "0.5rem"
                }}>
                    <Row>
                        <Text style={{
                            margin: "0"
                        }}>Section</Text>
                        <Text style={{
                            margin: "0"
                        }}>{section}</Text>
                    </Row>
                </Column>
                <Column style={{
                    marginRight: "0.5rem"
                }}>
                    <Row>
                        <Text style={{
                            margin: "0"
                        }}>Row</Text>
                        <Text style={{
                            margin: "0"
                        }}>{row}</Text>
                    </Row>
                </Column>
                <Column style={{
                }}>
                    <Row>
                        <Text style={{
                            margin: "0"
                        }}>Seat</Text>
                        <Text style={{
                            margin: "0"
                        }}>{seat}</Text>
                    </Row>
                </Column>
            </Column>
        </Container>
    )
}


EmailTicketItem.displayName = "EmailTicketItem"


export default EmailTicketItem;
