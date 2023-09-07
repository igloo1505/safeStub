// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCATEGORYFilterObjectSchema } from '../internals';

export const EnumCATEGORYFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCATEGORYFilterObjectSchema])
});
