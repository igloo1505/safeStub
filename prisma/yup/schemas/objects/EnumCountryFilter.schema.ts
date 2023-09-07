// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCountryFilterObjectSchema } from '../internals';

export const EnumCountryFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCountryFilterObjectSchema])
});
