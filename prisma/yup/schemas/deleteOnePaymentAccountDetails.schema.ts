import * as Yup from 'yup';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './internals'

export const PaymentAccountDetailsDeleteOneSchema = Yup.object({ where: PaymentAccountDetailsWhereUniqueInputObjectSchema  }).required()