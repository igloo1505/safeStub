// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedFloatNullableFilterObjectSchema } from '../internals';

export const IntNullableWithAggregatesFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([Yup.number()]),  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()),
Yup.number()]),  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()),
Yup.number()]),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
NestedIntNullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _avg: NestedFloatNullableFilterObjectSchema,  _sum: NestedIntNullableFilterObjectSchema,  _min: NestedIntNullableFilterObjectSchema,  _max: NestedIntNullableFilterObjectSchema
});
