// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumLeaguesFilterObjectSchema } from '../internals';

export const NestedEnumLeaguesWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumLeaguesWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumLeaguesFilterObjectSchema,  _max: NestedEnumLeaguesFilterObjectSchema
});
