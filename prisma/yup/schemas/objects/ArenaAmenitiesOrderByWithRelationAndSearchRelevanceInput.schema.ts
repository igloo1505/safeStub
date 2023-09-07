// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { EventOrderByRelationAggregateInputObjectSchema } from '../internals';

export const ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  indoor: SortOrderSchema,  covered: SortOrderSchema,  outdoor: SortOrderSchema,  food: SortOrderSchema,  alcohol: SortOrderSchema,  parking: SortOrderSchema,  shuttleAvailable: SortOrderSchema,  Arena: ArenaOrderByRelationAggregateInputObjectSchema,  Event: EventOrderByRelationAggregateInputObjectSchema
});
