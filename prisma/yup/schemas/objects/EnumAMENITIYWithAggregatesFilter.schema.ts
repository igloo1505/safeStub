// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumAMENITIYWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumAMENITIYFilterObjectSchema } from '../internals';

export const EnumAMENITIYWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumAMENITIYWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumAMENITIYFilterObjectSchema,  _max: NestedEnumAMENITIYFilterObjectSchema
});
