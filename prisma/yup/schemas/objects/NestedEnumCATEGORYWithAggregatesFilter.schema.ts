// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumCATEGORYFilterObjectSchema } from '../internals';

export const NestedEnumCATEGORYWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumCATEGORYWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumCATEGORYFilterObjectSchema,  _max: NestedEnumCATEGORYFilterObjectSchema
});
