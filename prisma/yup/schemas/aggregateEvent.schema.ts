import * as Yup from 'yup';
import { EventWhereInputObjectSchema, EventOrderByWithRelationInputObjectSchema, EventWhereUniqueInputObjectSchema } from './internals'

export const EventAggregateSchema = Yup.object({ where: EventWhereInputObjectSchema, orderBy: EventOrderByWithRelationInputObjectSchema, cursor: EventWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()