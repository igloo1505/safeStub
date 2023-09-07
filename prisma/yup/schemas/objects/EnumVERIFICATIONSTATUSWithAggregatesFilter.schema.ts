// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumVERIFICATIONSTATUSFilterObjectSchema } from '../internals';

export const EnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumVERIFICATIONSTATUSWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumVERIFICATIONSTATUSFilterObjectSchema,  _max: NestedEnumVERIFICATIONSTATUSFilterObjectSchema
});
