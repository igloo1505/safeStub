// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumFaqCategoryFilterObjectSchema } from '../internals';

export const EnumFaqCategoryFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumFaqCategoryFilterObjectSchema])
});
