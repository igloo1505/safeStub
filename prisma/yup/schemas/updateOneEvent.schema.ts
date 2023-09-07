import * as Yup from 'yup';
import { EventUpdateInputObjectSchema, EventWhereUniqueInputObjectSchema } from './internals'

export const EventUpdateOneSchema = Yup.object({ data: EventUpdateInputObjectSchema, where: EventWhereUniqueInputObjectSchema  }).required()