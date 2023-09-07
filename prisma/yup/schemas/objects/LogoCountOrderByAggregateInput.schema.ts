// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LogoCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  path: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  rel: SortOrderSchema,  url: SortOrderSchema,  teamId: SortOrderSchema
});
