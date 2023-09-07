// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';

export const PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  userId: SortOrderSchema,  user: UserOrderByWithRelationAndSearchRelevanceInputObjectSchema,  name: LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema,  location: LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema
});
