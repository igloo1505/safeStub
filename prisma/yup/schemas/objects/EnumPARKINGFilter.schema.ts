// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumPARKINGFilterObjectSchema } from '../internals';

export const EnumPARKINGFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumPARKINGFilterObjectSchema])
});
