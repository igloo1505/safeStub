// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { EventOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { TagOrderByRelevanceInputObjectSchema } from '../internals';

export const TagOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  value: SortOrderSchema,  Event: EventOrderByRelationAggregateInputObjectSchema,  _relevance: TagOrderByRelevanceInputObjectSchema
});
