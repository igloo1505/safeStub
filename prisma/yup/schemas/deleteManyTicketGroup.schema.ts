import * as Yup from 'yup';
import { TicketGroupWhereInputObjectSchema } from './internals'

export const TicketGroupDeleteManySchema = Yup.object({ TicketGroupWhereInputObjectSchema  }).required()