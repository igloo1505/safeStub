import * as Yup from 'yup';
import { PaymentAccountDetailsWhereInputObjectSchema } from './internals'

export const PaymentAccountDetailsDeleteManySchema = Yup.object({ PaymentAccountDetailsWhereInputObjectSchema  }).required()