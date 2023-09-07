// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereInputObjectSchema } from '../internals';

export const TeamListRelationFilterObjectSchema = Yup.object({
    every: TeamWhereInputObjectSchema,  some: TeamWhereInputObjectSchema,  none: TeamWhereInputObjectSchema
});
