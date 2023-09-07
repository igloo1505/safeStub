// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumAMENITIYFilterObjectSchema } from '../internals';

export const EnumAMENITIYFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumAMENITIYFilterObjectSchema])
});
