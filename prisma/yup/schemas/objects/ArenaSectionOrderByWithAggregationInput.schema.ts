// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaSectionCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaSectionAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaSectionMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaSectionMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaSectionSumOrderByAggregateInputObjectSchema } from '../internals';

export const ArenaSectionOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  arenaId: SortOrderSchema,  _count: ArenaSectionCountOrderByAggregateInputObjectSchema,  _avg: ArenaSectionAvgOrderByAggregateInputObjectSchema,  _max: ArenaSectionMaxOrderByAggregateInputObjectSchema,  _min: ArenaSectionMinOrderByAggregateInputObjectSchema,  _sum: ArenaSectionSumOrderByAggregateInputObjectSchema
});
