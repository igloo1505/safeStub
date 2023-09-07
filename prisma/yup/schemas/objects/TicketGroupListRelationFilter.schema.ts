// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereInputObjectSchema } from '../internals';

export const TicketGroupListRelationFilterObjectSchema = Yup.object({
    every: TicketGroupWhereInputObjectSchema,  some: TicketGroupWhereInputObjectSchema,  none: TicketGroupWhereInputObjectSchema
});
