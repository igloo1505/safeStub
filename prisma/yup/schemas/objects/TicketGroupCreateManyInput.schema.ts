// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TicketGroupCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  eventId: Yup.mixed().oneOfSchemas([Yup.number()]),  seatedTogether: Yup.boolean().required()
});
