// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumSportsFilterObjectSchema } from '../internals';

export const EnumSportsFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumSportsFilterObjectSchema])
});
