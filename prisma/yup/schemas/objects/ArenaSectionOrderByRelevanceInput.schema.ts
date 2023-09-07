// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionOrderByRelevanceFieldEnumSchema } from '../internals';;
import { SortOrderSchema } from '../internals';

export const ArenaSectionOrderByRelevanceInputObjectSchema = Yup.object({
    fields: Yup.mixed().oneOfSchemas([ArenaSectionOrderByRelevanceFieldEnumSchema,
ArenaSectionOrderByRelevanceFieldEnumSchema]),  sort: SortOrderSchema,  search: Yup.string().required()
});
