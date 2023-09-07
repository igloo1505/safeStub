// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema } from '../internals';

export const TicketGroupUncheckedCreateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.number(),  seatedTogether: Yup.boolean().required(),  tickets: TicketUncheckedCreateNestedManyWithoutTicketGroupInputObjectSchema
});
