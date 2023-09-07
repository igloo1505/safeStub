// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamOrderByRelevanceFieldEnumSchema } from '../internals';;
import { SortOrderSchema } from '../internals';

export const TeamOrderByRelevanceInputObjectSchema = Yup.object({
    fields: Yup.mixed().oneOfSchemas([TeamOrderByRelevanceFieldEnumSchema,
TeamOrderByRelevanceFieldEnumSchema]),  sort: SortOrderSchema,  search: Yup.string().required()
});
