// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ArenaOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LocationOrderByRelevanceInputObjectSchema } from '../internals';

export const LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  street: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  city: SortOrderSchema,  cityId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  state: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  lat: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  country: SortOrderSchema,  userId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  arena: ArenaOrderByRelationAggregateInputObjectSchema,  personalDetails: PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: LocationOrderByRelevanceInputObjectSchema
});
