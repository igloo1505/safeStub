// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableIntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';

export const UserUncheckedUpdateWithoutPurchaseHistoryInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  email: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  password: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  role: Yup.mixed().oneOfSchemas([EnumROLEFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  verified: Yup.mixed().oneOfSchemas([EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema]),  personalDetails: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema
});
