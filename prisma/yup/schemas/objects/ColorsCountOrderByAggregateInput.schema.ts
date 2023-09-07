// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ColorsCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  primary: SortOrderSchema,  secondary: SortOrderSchema
});
