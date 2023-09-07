// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumLeaguesWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumLeaguesFilterObjectSchema } from '../internals';

export const EnumLeaguesWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumLeaguesWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumLeaguesFilterObjectSchema,  _max: NestedEnumLeaguesFilterObjectSchema
});
