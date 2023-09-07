// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionWhereInputObjectSchema } from '../internals';

export const ArenaSectionRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([ArenaSectionWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([ArenaSectionWhereInputObjectSchema])
});
