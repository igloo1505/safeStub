// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamSumOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  homeArenaId: SortOrderSchema,  eventId: SortOrderSchema,  colorsId: SortOrderSchema
});
