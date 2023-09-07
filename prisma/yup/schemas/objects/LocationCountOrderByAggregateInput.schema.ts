// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LocationCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: SortOrderSchema,  street: SortOrderSchema,  zip: SortOrderSchema,  city: SortOrderSchema,  cityId: SortOrderSchema,  state: SortOrderSchema,  lat: SortOrderSchema,  long: SortOrderSchema,  country: SortOrderSchema,  userId: SortOrderSchema
});
