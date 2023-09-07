import * as Yup from 'yup';
import { TicketWhereInputObjectSchema, TicketOrderByWithAggregationInputObjectSchema, TicketScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { TicketScalarFieldEnumSchema } from './internals'

export const TicketGroupBySchema = Yup.object({ where: TicketWhereInputObjectSchema, orderBy: TicketOrderByWithAggregationInputObjectSchema, having: TicketScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(TicketScalarFieldEnumSchema).required()  }).required()