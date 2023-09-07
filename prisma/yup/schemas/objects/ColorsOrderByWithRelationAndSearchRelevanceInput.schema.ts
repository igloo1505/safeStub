// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ColorsOrderByRelevanceInputObjectSchema } from '../internals';

export const ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  primary: SortOrderSchema,  secondary: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  Team: TeamOrderByRelationAggregateInputObjectSchema,  _relevance: ColorsOrderByRelevanceInputObjectSchema
});
