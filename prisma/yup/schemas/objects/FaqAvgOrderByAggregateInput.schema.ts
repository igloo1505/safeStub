// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const FaqAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  priority: SortOrderSchema
});
