// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsWhereInputObjectSchema } from '../internals';

export const ColorsRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([ColorsWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([ColorsWhereInputObjectSchema])
});
