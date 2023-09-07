// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereInputObjectSchema } from '../internals';

export const ImageRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([ImageWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([ImageWhereInputObjectSchema])
});
