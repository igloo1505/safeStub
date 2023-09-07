// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereInputObjectSchema } from '../internals';

export const ArenaRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([ArenaWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([ArenaWhereInputObjectSchema])
});
