import * as Yup from 'yup';
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from './internals'

export const PaymentAccountDetailsFindUniqueSchema = Yup.object({ where: PaymentAccountDetailsWhereUniqueInputObjectSchema }).required()