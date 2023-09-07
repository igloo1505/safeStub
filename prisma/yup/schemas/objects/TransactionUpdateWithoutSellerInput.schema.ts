// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpdateOneRequiredWithoutBoughtNestedInputObjectSchema } from '../internals';

export const TransactionUpdateWithoutSellerInputObjectSchema = Yup.object({
    price: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  paymentId: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  date: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  buyer: PurchaseHistoryUpdateOneRequiredWithoutBoughtNestedInputObjectSchema
});
