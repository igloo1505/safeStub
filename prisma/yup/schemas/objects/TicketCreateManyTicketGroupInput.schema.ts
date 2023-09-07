// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TicketCreateManyTicketGroupInputObjectSchema = Yup.object({
    id: Yup.number(),  eventId: Yup.mixed().oneOfSchemas([Yup.number()]),  arenaSectionId: Yup.number().required()
});
