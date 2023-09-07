import * as Yup from 'yup';
import { PaymentAccountDetailsCreateInputObjectSchema } from './internals'

export const PaymentAccountDetailsCreateSchema = Yup.object({ data: PaymentAccountDetailsCreateInputObjectSchema  }).required()