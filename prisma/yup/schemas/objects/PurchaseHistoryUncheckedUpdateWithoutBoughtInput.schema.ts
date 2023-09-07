// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  sold: TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema
});
