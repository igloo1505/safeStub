// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumFaqCategoryWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumFaqCategoryFilterObjectSchema } from '../internals';

export const EnumFaqCategoryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumFaqCategoryWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumFaqCategoryFilterObjectSchema,  _max: NestedEnumFaqCategoryFilterObjectSchema
});
