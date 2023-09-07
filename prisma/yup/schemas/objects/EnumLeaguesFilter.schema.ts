// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumLeaguesFilterObjectSchema } from '../internals';

export const EnumLeaguesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumLeaguesFilterObjectSchema])
});
