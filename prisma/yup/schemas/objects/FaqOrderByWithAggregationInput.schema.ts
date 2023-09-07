// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FaqCountOrderByAggregateInputObjectSchema } from '../internals';;
import { FaqAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { FaqMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { FaqMinOrderByAggregateInputObjectSchema } from '../internals';;
import { FaqSumOrderByAggregateInputObjectSchema } from '../internals';

export const FaqOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  title: SortOrderSchema,  subtitle: SortOrderSchema,  body: SortOrderSchema,  category: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  priority: SortOrderSchema,  _count: FaqCountOrderByAggregateInputObjectSchema,  _avg: FaqAvgOrderByAggregateInputObjectSchema,  _max: FaqMaxOrderByAggregateInputObjectSchema,  _min: FaqMinOrderByAggregateInputObjectSchema,  _sum: FaqSumOrderByAggregateInputObjectSchema
});
