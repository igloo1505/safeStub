// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereInputObjectSchema } from '../internals';

export const ArenaSectionListRelationFilterObjectSchema = Yup.object({
    every: ArenaSectionWhereInputObjectSchema,  some: ArenaSectionWhereInputObjectSchema,  none: ArenaSectionWhereInputObjectSchema
});
