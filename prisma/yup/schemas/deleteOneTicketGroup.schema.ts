import * as Yup from 'yup';
import { TicketGroupWhereUniqueInputObjectSchema } from './internals'

export const TicketGroupDeleteOneSchema = Yup.object({ where: TicketGroupWhereUniqueInputObjectSchema  }).required()