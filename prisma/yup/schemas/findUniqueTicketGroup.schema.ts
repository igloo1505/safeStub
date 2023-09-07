import * as Yup from 'yup';
import { TicketGroupWhereUniqueInputObjectSchema } from './internals'

export const TicketGroupFindUniqueSchema = Yup.object({ where: TicketGroupWhereUniqueInputObjectSchema }).required()