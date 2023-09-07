// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ArenaAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  arenaAmenitiesId: SortOrderSchema,  locationId: SortOrderSchema,  sectionImageId: SortOrderSchema
});
