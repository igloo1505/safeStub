// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FaqOrderByRelevanceFieldEnumSchema } from '../internals';;
import { SortOrderSchema } from '../internals';

export const FaqOrderByRelevanceInputObjectSchema = Yup.object({
    fields: Yup.mixed().oneOfSchemas([FaqOrderByRelevanceFieldEnumSchema,
FaqOrderByRelevanceFieldEnumSchema]),  sort: SortOrderSchema,  search: Yup.string().required()
});
