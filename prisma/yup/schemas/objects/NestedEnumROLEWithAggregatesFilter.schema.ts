// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumROLEFilterObjectSchema } from '../internals';

export const NestedEnumROLEWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumROLEWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumROLEFilterObjectSchema,  _max: NestedEnumROLEFilterObjectSchema
});
