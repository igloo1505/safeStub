import * as Yup from 'yup';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema, PaymentAccountDetailsCreateInputObjectSchema, PaymentAccountDetailsUpdateInputObjectSchema } from './internals'

export const PaymentAccountDetailsUpsertSchema = Yup.object({ where: PaymentAccountDetailsWhereUniqueInputObjectSchema, data: PaymentAccountDetailsCreateInputObjectSchema, update: PaymentAccountDetailsUpdateInputObjectSchema  }).required()