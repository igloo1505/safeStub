// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketGroupUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  eventId: Yup.mixed().oneOfSchemas([Yup.number()]),  seatedTogether: Yup.boolean().required(),  tickets: TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema
});
