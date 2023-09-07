// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LegalNameOrderByRelevanceInputObjectSchema } from '../internals';

export const LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    first: SortOrderSchema,  middle: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  last: SortOrderSchema,  detailsId: SortOrderSchema,  personalDetails: PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: LegalNameOrderByRelevanceInputObjectSchema
});
