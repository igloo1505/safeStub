// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from '../internals';

export const PaymentAccountDetailsCreateNestedOneWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PaymentAccountDetailsCreateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema,  connect: PaymentAccountDetailsWhereUniqueInputObjectSchema
});
