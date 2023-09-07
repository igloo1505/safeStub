// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  bought: TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema
});
