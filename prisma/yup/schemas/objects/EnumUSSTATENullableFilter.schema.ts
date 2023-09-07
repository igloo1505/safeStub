// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumUSSTATENullableFilterObjectSchema } from '../internals';

export const EnumUSSTATENullableFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumUSSTATENullableFilterObjectSchema])
});
