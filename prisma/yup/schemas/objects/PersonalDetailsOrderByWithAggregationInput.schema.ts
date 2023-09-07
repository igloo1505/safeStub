// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PersonalDetailsCountOrderByAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsMinOrderByAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsSumOrderByAggregateInputObjectSchema } from '../internals';

export const PersonalDetailsOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  userId: SortOrderSchema,  _count: PersonalDetailsCountOrderByAggregateInputObjectSchema,  _avg: PersonalDetailsAvgOrderByAggregateInputObjectSchema,  _max: PersonalDetailsMaxOrderByAggregateInputObjectSchema,  _min: PersonalDetailsMinOrderByAggregateInputObjectSchema,  _sum: PersonalDetailsSumOrderByAggregateInputObjectSchema
});
