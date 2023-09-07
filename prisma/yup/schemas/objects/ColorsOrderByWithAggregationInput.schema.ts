// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ColorsCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ColorsAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ColorsMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ColorsMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ColorsSumOrderByAggregateInputObjectSchema } from '../internals';

export const ColorsOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  primary: SortOrderSchema,  secondary: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  _count: ColorsCountOrderByAggregateInputObjectSchema,  _avg: ColorsAvgOrderByAggregateInputObjectSchema,  _max: ColorsMaxOrderByAggregateInputObjectSchema,  _min: ColorsMinOrderByAggregateInputObjectSchema,  _sum: ColorsSumOrderByAggregateInputObjectSchema
});
