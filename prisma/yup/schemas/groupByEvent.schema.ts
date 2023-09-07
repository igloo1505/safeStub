import * as Yup from 'yup';
import { EventWhereInputObjectSchema, EventOrderByWithAggregationInputObjectSchema, EventScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { EventScalarFieldEnumSchema } from './internals'

export const EventGroupBySchema = Yup.object({ where: EventWhereInputObjectSchema, orderBy: EventOrderByWithAggregationInputObjectSchema, having: EventScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(EventScalarFieldEnumSchema).required()  }).required()