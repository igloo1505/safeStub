// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ColorsMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  primary: SortOrderSchema,  secondary: SortOrderSchema
});
