// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const FaqMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  title: SortOrderSchema,  subtitle: SortOrderSchema,  body: SortOrderSchema,  category: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  priority: SortOrderSchema
});
