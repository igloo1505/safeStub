// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaAmenitiesCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesSumOrderByAggregateInputObjectSchema } from '../internals';

export const ArenaAmenitiesOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  indoor: SortOrderSchema,  covered: SortOrderSchema,  outdoor: SortOrderSchema,  food: SortOrderSchema,  alcohol: SortOrderSchema,  parking: SortOrderSchema,  shuttleAvailable: SortOrderSchema,  _count: ArenaAmenitiesCountOrderByAggregateInputObjectSchema,  _avg: ArenaAmenitiesAvgOrderByAggregateInputObjectSchema,  _max: ArenaAmenitiesMaxOrderByAggregateInputObjectSchema,  _min: ArenaAmenitiesMinOrderByAggregateInputObjectSchema,  _sum: ArenaAmenitiesSumOrderByAggregateInputObjectSchema
});
