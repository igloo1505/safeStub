// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumNFLTeamNameFilterObjectSchema } from '../internals';

export const NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumNFLTeamNameFilterObjectSchema,  _max: NestedEnumNFLTeamNameFilterObjectSchema
});
