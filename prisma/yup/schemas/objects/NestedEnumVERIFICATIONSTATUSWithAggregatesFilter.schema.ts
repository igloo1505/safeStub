// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumVERIFICATIONSTATUSFilterObjectSchema } from '../internals';

export const NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumVERIFICATIONSTATUSFilterObjectSchema,  _max: NestedEnumVERIFICATIONSTATUSFilterObjectSchema
});
