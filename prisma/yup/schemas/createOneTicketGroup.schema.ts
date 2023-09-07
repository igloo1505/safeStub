import * as Yup from 'yup';
import { TicketGroupCreateInputObjectSchema } from './internals'

export const TicketGroupCreateSchema = Yup.object({ data: TicketGroupCreateInputObjectSchema  }).required()