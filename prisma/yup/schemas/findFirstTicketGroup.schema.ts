import * as Yup from 'yup';
import { TicketGroupWhereInputObjectSchema, TicketGroupOrderByWithRelationInputObjectSchema, TicketGroupWhereUniqueInputObjectSchema } from './internals';
import { TicketGroupScalarFieldEnumSchema } from './internals'

export const TicketGroupFindFirstSchema = Yup.object({ where: TicketGroupWhereInputObjectSchema, orderBy: TicketGroupOrderByWithRelationInputObjectSchema, cursor: TicketGroupWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TicketGroupScalarFieldEnumSchema) }).required()