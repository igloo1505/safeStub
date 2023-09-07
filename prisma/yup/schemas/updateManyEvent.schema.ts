import * as Yup from 'yup';
import { EventUpdateManyMutationInputObjectSchema, EventWhereInputObjectSchema } from './internals'

export const EventUpdateManySchema = Yup.object({ data: EventUpdateManyMutationInputObjectSchema, where: EventWhereInputObjectSchema  }).required()