import * as Yup from 'yup';
import { TicketGroupWhereInputObjectSchema, TicketGroupOrderByWithAggregationInputObjectSchema, TicketGroupScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TicketGroupScalarFieldEnumSchema } from './internals'

export const TicketGroupGroupBySchema = Yup.object({ where: TicketGroupWhereInputObjectSchema, orderBy: TicketGroupOrderByWithAggregationInputObjectSchema, having: TicketGroupScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TicketGroupScalarFieldEnumSchema).required()  }).required()