// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { LocationCountOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationMinOrderByAggregateInputObjectSchema } from '../internals';;
import { LocationSumOrderByAggregateInputObjectSchema } from '../internals';

export const LocationOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  street: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  city: SortOrderSchema,  cityId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  state: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  lat: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  country: SortOrderSchema,  userId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  _count: LocationCountOrderByAggregateInputObjectSchema,  _avg: LocationAvgOrderByAggregateInputObjectSchema,  _max: LocationMaxOrderByAggregateInputObjectSchema,  _min: LocationMinOrderByAggregateInputObjectSchema,  _sum: LocationSumOrderByAggregateInputObjectSchema
});
