// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { LogoCountOrderByAggregateInputObjectSchema } from '../internals';;
import { LogoAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { LogoMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { LogoMinOrderByAggregateInputObjectSchema } from '../internals';;
import { LogoSumOrderByAggregateInputObjectSchema } from '../internals';

export const LogoOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  path: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  rel: SortOrderSchema,  url: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  teamId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  _count: LogoCountOrderByAggregateInputObjectSchema,  _avg: LogoAvgOrderByAggregateInputObjectSchema,  _max: LogoMaxOrderByAggregateInputObjectSchema,  _min: LogoMinOrderByAggregateInputObjectSchema,  _sum: LogoSumOrderByAggregateInputObjectSchema
});
