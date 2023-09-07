import * as Yup from 'yup';
import { TicketWhereInputObjectSchema, TicketOrderByWithRelationInputObjectSchema, TicketWhereUniqueInputObjectSchema } from './internals'

export const TicketAggregateSchema = Yup.object({ where: TicketWhereInputObjectSchema, orderBy: TicketOrderByWithRelationInputObjectSchema, cursor: TicketWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()