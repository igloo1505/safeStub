// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereInputObjectSchema } from '../internals';

export const ArenaListRelationFilterObjectSchema = Yup.object({
    every: ArenaWhereInputObjectSchema,  some: ArenaWhereInputObjectSchema,  none: ArenaWhereInputObjectSchema
});
