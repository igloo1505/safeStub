// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TicketCreateManyEventInputObjectSchema = Yup.object({
    id: Yup.number(),  ticketGroupId: Yup.mixed().oneOfSchemas([Yup.number()]),  arenaSectionId: Yup.number().required()
});
