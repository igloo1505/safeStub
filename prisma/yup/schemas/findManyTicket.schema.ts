import * as Yup from 'yup';
import { TicketWhereInputObjectSchema, TicketOrderByWithRelationInputObjectSchema, TicketWhereUniqueInputObjectSchema } from './internals';
import { TicketScalarFieldEnumSchema } from './internals'

export const TicketFindManySchema = Yup.object({ where: TicketWhereInputObjectSchema, orderBy: TicketOrderByWithRelationInputObjectSchema, cursor: TicketWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(TicketScalarFieldEnumSchema)  }).required()