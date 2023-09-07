// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ArenaSectionMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  arenaId: SortOrderSchema
});
