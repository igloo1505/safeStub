// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedFloatNullableFilterObjectSchema } from '../internals';

export const NestedIntNullableWithAggregatesFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([Yup.number()]),  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()),
Yup.number()]),  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number()),
Yup.number()]),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
Yup.lazy(() => NestedIntNullableWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntNullableFilterObjectSchema,  _avg: NestedFloatNullableFilterObjectSchema,  _sum: NestedIntNullableFilterObjectSchema,  _min: NestedIntNullableFilterObjectSchema,  _max: NestedIntNullableFilterObjectSchema
});
