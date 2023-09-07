// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumNFLTeamNameFilterObjectSchema } from '../internals';

export const EnumNFLTeamNameWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumNFLTeamNameFilterObjectSchema,  _max: NestedEnumNFLTeamNameFilterObjectSchema
});
