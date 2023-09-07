import * as Yup from 'yup';
import { TicketCreateInputObjectSchema } from './internals'

export const TicketCreateSchema = Yup.object({ data: TicketCreateInputObjectSchema  }).required()