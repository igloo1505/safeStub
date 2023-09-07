// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereInputObjectSchema } from '../internals';

export const EventListRelationFilterObjectSchema = Yup.object({
    every: EventWhereInputObjectSchema,  some: EventWhereInputObjectSchema,  none: EventWhereInputObjectSchema
});
