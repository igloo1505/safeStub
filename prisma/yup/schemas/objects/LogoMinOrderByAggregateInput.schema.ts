// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LogoMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  path: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  url: SortOrderSchema,  teamId: SortOrderSchema
});
