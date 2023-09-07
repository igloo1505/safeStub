import * as Yup from 'yup';
import { PaymentAccountDetailsWhereInputObjectSchema, PaymentAccountDetailsOrderByWithRelationInputObjectSchema, PaymentAccountDetailsWhereUniqueInputObjectSchema } from './internals'

export const PaymentAccountDetailsAggregateSchema = Yup.object({ where: PaymentAccountDetailsWhereInputObjectSchema, orderBy: PaymentAccountDetailsOrderByWithRelationInputObjectSchema, cursor: PaymentAccountDetailsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()