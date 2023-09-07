// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from '../internals';

export const ArenaSectionUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.number(),  name: Yup.string().required(),  arenaId: Yup.number().required(),  Ticket: TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema
});
