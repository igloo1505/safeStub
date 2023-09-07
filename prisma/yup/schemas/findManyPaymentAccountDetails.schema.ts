import * as Yup from 'yup';
import { PaymentAccountDetailsWhereInputObjectSchema, PaymentAccountDetailsOrderByWithRelationInputObjectSchema, PaymentAccountDetailsWhereUniqueInputObjectSchema } from './internals';
import { PaymentAccountDetailsScalarFieldEnumSchema } from './internals'

export const PaymentAccountDetailsFindManySchema = Yup.object({ where: PaymentAccountDetailsWhereInputObjectSchema, orderBy: PaymentAccountDetailsOrderByWithRelationInputObjectSchema, cursor: PaymentAccountDetailsWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PaymentAccountDetailsScalarFieldEnumSchema)  }).required()