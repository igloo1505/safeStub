// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumFaqCategoryFilterObjectSchema } from '../internals';

export const NestedEnumFaqCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumFaqCategoryWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumFaqCategoryFilterObjectSchema,  _max: NestedEnumFaqCategoryFilterObjectSchema
});
