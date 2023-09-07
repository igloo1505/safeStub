import * as Yup from 'yup';
import { TicketGroupWhereInputObjectSchema, TicketGroupOrderByWithRelationInputObjectSchema, TicketGroupWhereUniqueInputObjectSchema } from './internals'

export const TicketGroupAggregateSchema = Yup.object({ where: TicketGroupWhereInputObjectSchema, orderBy: TicketGroupOrderByWithRelationInputObjectSchema, cursor: TicketGroupWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()