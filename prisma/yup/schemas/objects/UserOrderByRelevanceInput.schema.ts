// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserOrderByRelevanceFieldEnumSchema } from '../internals';;
import { SortOrderSchema } from '../internals';

export const UserOrderByRelevanceInputObjectSchema = Yup.object({
    fields: Yup.mixed().oneOfSchemas([UserOrderByRelevanceFieldEnumSchema,
UserOrderByRelevanceFieldEnumSchema]),  sort: SortOrderSchema,  search: Yup.string().required()
});
