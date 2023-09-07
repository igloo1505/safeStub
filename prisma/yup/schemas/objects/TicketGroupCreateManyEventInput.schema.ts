// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TicketGroupCreateManyEventInputObjectSchema = Yup.object({
    id: Yup.number(),  seatedTogether: Yup.boolean().required()
});
