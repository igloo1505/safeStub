// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ImageMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  publicUrl: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
