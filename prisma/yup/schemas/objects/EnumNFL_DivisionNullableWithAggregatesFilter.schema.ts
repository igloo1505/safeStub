// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedEnumNFL_DivisionNullableFilterObjectSchema } from '../internals';

export const EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFL_DivisionNullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedEnumNFL_DivisionNullableFilterObjectSchema,  _max: NestedEnumNFL_DivisionNullableFilterObjectSchema
});
