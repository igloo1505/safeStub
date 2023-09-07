import * as Yup from 'yup';
import { EventWhereUniqueInputObjectSchema, EventCreateInputObjectSchema, EventUpdateInputObjectSchema } from './internals'

export const EventUpsertSchema = Yup.object({ where: EventWhereUniqueInputObjectSchema, data: EventCreateInputObjectSchema, update: EventUpdateInputObjectSchema  }).required()