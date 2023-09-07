// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketWhereInputObjectSchema } from '../internals';

export const TicketListRelationFilterObjectSchema = Yup.object({
    every: TicketWhereInputObjectSchema,  some: TicketWhereInputObjectSchema,  none: TicketWhereInputObjectSchema
});
