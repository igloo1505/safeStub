// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFL_DivisionNullableFilterObjectSchema } from '../internals';

export const EnumNFL_DivisionNullableFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFL_DivisionNullableFilterObjectSchema])
});
