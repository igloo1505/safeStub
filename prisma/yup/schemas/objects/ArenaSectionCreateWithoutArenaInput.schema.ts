// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from '../internals';

export const ArenaSectionCreateWithoutArenaInputObjectSchema = Yup.object({
    name: Yup.string().required(),  Ticket: TicketCreateNestedManyWithoutArenaSectionInputObjectSchema
});
