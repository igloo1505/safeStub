// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { LegalNameCountOrderByAggregateInputObjectSchema } from '../internals';;
import { LegalNameAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { LegalNameMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { LegalNameMinOrderByAggregateInputObjectSchema } from '../internals';;
import { LegalNameSumOrderByAggregateInputObjectSchema } from '../internals';

export const LegalNameOrderByWithAggregationInputObjectSchema = Yup.object({
    first: SortOrderSchema,  middle: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  last: SortOrderSchema,  detailsId: SortOrderSchema,  _count: LegalNameCountOrderByAggregateInputObjectSchema,  _avg: LegalNameAvgOrderByAggregateInputObjectSchema,  _max: LegalNameMaxOrderByAggregateInputObjectSchema,  _min: LegalNameMinOrderByAggregateInputObjectSchema,  _sum: LegalNameSumOrderByAggregateInputObjectSchema
});
