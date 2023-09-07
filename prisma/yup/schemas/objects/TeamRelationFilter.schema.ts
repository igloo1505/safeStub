// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereInputObjectSchema } from '../internals';

export const TeamRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([TeamWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([TeamWhereInputObjectSchema])
});
