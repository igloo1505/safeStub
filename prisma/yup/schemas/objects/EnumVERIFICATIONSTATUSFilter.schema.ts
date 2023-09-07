// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumVERIFICATIONSTATUSFilterObjectSchema } from '../internals';

export const EnumVERIFICATIONSTATUSFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumVERIFICATIONSTATUSFilterObjectSchema])
});
