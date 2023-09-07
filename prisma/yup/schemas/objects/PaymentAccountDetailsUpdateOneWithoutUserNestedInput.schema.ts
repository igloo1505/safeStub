// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PaymentAccountDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUpsertWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const PaymentAccountDetailsUpdateOneWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PaymentAccountDetailsCreateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PaymentAccountDetailsCreateOrConnectWithoutUserInputObjectSchema,  upsert: PaymentAccountDetailsUpsertWithoutUserInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PaymentAccountDetailsWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PaymentAccountDetailsUpdateWithoutUserInputObjectSchema,
PaymentAccountDetailsUncheckedUpdateWithoutUserInputObjectSchema])
});
