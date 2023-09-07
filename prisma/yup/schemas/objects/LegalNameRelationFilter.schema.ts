// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameWhereInputObjectSchema } from '../internals';

export const LegalNameRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([LegalNameWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([LegalNameWhereInputObjectSchema])
});
