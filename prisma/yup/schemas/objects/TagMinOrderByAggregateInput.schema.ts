// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TagMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  value: SortOrderSchema
});
