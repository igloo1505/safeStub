// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PaymentAccountDetailsUpsertWithoutUserInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PaymentAccountDetailsUpdateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PaymentAccountDetailsCreateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema])
});
