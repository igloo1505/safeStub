import * as Yup from 'yup';

export const TicketScalarFieldEnumSchema = Yup.mixed().oneOf(["id","eventId","ticketGroupId","arenaSectionId"])