// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ArenaCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: SortOrderSchema,  name: SortOrderSchema,  arenaAmenitiesId: SortOrderSchema,  locationId: SortOrderSchema,  sectionImageId: SortOrderSchema
});
