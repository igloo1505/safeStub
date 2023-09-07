// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TagWhereInputObjectSchema } from '../internals';

export const TagListRelationFilterObjectSchema = Yup.object({
    every: TagWhereInputObjectSchema,  some: TagWhereInputObjectSchema,  none: TagWhereInputObjectSchema
});
