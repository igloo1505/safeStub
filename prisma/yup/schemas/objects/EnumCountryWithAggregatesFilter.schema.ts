// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumCountryWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumCountryFilterObjectSchema } from '../internals';

export const EnumCountryWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumCountryWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumCountryFilterObjectSchema,  _max: NestedEnumCountryFilterObjectSchema
});
