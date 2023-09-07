import * as Yup from 'yup';
import { EventCreateInputObjectSchema } from './internals'

export const EventCreateSchema = Yup.object({ data: EventCreateInputObjectSchema  }).required()