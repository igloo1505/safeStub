import * as Yup from 'yup';
import { TicketWhereUniqueInputObjectSchema, TicketCreateInputObjectSchema, TicketUpdateInputObjectSchema } from './internals'

export const TicketUpsertSchema = Yup.object({ where: TicketWhereUniqueInputObjectSchema, data: TicketCreateInputObjectSchema, update: TicketUpdateInputObjectSchema  }).required()