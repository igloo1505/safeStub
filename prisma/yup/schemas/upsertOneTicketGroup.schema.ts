import * as Yup from 'yup';
import { TicketGroupWhereUniqueInputObjectSchema, TicketGroupCreateInputObjectSchema, TicketGroupUpdateInputObjectSchema } from './internals'

export const TicketGroupUpsertSchema = Yup.object({ where: TicketGroupWhereUniqueInputObjectSchema, data: TicketGroupCreateInputObjectSchema, update: TicketGroupUpdateInputObjectSchema  }).required()