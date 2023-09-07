// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCATEGORYWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumCATEGORYFilterObjectSchema } from '../internals';

export const EnumCATEGORYWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCATEGORYWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumCATEGORYFilterObjectSchema,  _max: NestedEnumCATEGORYFilterObjectSchema
});
