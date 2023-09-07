import * as Yup from 'yup';

export const TicketGroupScalarFieldEnumSchema = Yup.mixed().oneOf(["id","eventId","seatedTogether"])