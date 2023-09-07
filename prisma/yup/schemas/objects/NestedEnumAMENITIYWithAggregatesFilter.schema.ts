// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumAMENITIYFilterObjectSchema } from '../internals';

export const NestedEnumAMENITIYWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumAMENITIYWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumAMENITIYFilterObjectSchema,  _max: NestedEnumAMENITIYFilterObjectSchema
});
