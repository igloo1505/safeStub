import * as Yup from 'yup';
import { PaymentAccountDetailsUpdateManyMutationInputObjectSchema, PaymentAccountDetailsWhereInputObjectSchema } from './internals'

export const PaymentAccountDetailsUpdateManySchema = Yup.object({ data: PaymentAccountDetailsUpdateManyMutationInputObjectSchema, where: PaymentAccountDetailsWhereInputObjectSchema  }).required()