import * as Yup from 'yup';
import { PaymentAccountDetailsUpdateInputObjectSchema, PaymentAccountDetailsWhereUniqueInputObjectSchema } from './internals'

export const PaymentAccountDetailsUpdateOneSchema = Yup.object({ data: PaymentAccountDetailsUpdateInputObjectSchema, where: PaymentAccountDetailsWhereUniqueInputObjectSchema  }).required()