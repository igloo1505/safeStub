// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ImageCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageSumOrderByAggregateInputObjectSchema } from '../internals';

export const ImageOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  publicUrl: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: ImageCountOrderByAggregateInputObjectSchema,  _avg: ImageAvgOrderByAggregateInputObjectSchema,  _max: ImageMaxOrderByAggregateInputObjectSchema,  _min: ImageMinOrderByAggregateInputObjectSchema,  _sum: ImageSumOrderByAggregateInputObjectSchema
});
