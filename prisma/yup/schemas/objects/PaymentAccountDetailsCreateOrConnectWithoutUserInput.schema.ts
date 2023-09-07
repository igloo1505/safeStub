// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: PaymentAccountDetailsWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PaymentAccountDetailsCreateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema])
});
