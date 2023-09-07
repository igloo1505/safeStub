// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  uniqueKey: SortOrderSchema,  name: SortOrderSchema,  abbreviation: SortOrderSchema,  displayName: SortOrderSchema,  displayName_short: SortOrderSchema,  nickname: SortOrderSchema,  league: SortOrderSchema,  sport: SortOrderSchema,  conference: SortOrderSchema,  division: SortOrderSchema,  homeArenaId: SortOrderSchema,  eventId: SortOrderSchema,  colorsId: SortOrderSchema
});
