// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const EventMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  category: SortOrderSchema,  arenaId: SortOrderSchema,  amenitiesId: SortOrderSchema,  date: SortOrderSchema,  title: SortOrderSchema,  description: SortOrderSchema
});
