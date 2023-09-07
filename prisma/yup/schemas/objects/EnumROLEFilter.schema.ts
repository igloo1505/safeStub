// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumROLEFilterObjectSchema } from '../internals';

export const EnumROLEFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumROLEFilterObjectSchema])
});
