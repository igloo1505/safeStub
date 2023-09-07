// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketGroupWhereInputObjectSchema } from '../internals';

export const TicketGroupRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([TicketGroupWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([TicketGroupWhereInputObjectSchema])
});
