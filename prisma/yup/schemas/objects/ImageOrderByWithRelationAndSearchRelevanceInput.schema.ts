// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ArenaOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ImageOrderByRelevanceInputObjectSchema } from '../internals';

export const ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  publicUrl: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  Arena: ArenaOrderByRelationAggregateInputObjectSchema,  _relevance: ImageOrderByRelevanceInputObjectSchema
});
