// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateManyWithoutPaymentAccountNestedInputObjectSchema } from '../internals';

export const PaymentAccountDetailsUncheckedUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  nameOnAccount: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  User: UserUncheckedUpdateManyWithoutPaymentAccountNestedInputObjectSchema
});
