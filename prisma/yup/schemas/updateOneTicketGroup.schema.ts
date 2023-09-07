import * as Yup from 'yup';
import { TicketGroupUpdateInputObjectSchema, TicketGroupWhereUniqueInputObjectSchema } from './internals'

export const TicketGroupUpdateOneSchema = Yup.object({ data: TicketGroupUpdateInputObjectSchema, where: TicketGroupWhereUniqueInputObjectSchema  }).required()