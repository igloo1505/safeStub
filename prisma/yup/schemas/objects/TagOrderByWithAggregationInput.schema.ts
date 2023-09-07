// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TagCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TagAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TagMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TagMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TagSumOrderByAggregateInputObjectSchema } from '../internals';

export const TagOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  value: SortOrderSchema,  _count: TagCountOrderByAggregateInputObjectSchema,  _avg: TagAvgOrderByAggregateInputObjectSchema,  _max: TagMaxOrderByAggregateInputObjectSchema,  _min: TagMinOrderByAggregateInputObjectSchema,  _sum: TagSumOrderByAggregateInputObjectSchema
});
