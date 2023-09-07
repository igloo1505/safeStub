// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ArenaAmenitiesCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  indoor: SortOrderSchema,  covered: SortOrderSchema,  outdoor: SortOrderSchema,  food: SortOrderSchema,  alcohol: SortOrderSchema,  parking: SortOrderSchema,  shuttleAvailable: SortOrderSchema
});
