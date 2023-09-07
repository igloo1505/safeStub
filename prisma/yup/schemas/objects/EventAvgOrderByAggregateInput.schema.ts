// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const EventAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  arenaId: SortOrderSchema,  amenitiesId: SortOrderSchema
});
