import * as Yup from 'yup';
import { PaymentAccountDetailsWhereInputObjectSchema, PaymentAccountDetailsOrderByWithAggregationInputObjectSchema, PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PaymentAccountDetailsScalarFieldEnumSchema } from './internals'

export const PaymentAccountDetailsGroupBySchema = Yup.object({ where: PaymentAccountDetailsWhereInputObjectSchema, orderBy: PaymentAccountDetailsOrderByWithAggregationInputObjectSchema, having: PaymentAccountDetailsScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PaymentAccountDetailsScalarFieldEnumSchema).required()  }).required()