// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LogoSumOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  width: SortOrderSchema,  height: SortOrderSchema,  teamId: SortOrderSchema
});
