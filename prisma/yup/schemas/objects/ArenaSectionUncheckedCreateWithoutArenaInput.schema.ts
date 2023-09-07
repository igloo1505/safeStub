// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from '../internals';

export const ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  name: Yup.string().required(),  Ticket: TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema
});
