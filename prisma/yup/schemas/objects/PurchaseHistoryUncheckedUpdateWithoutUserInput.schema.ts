// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  bought: TransactionUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema,  sold: TransactionUncheckedUpdateManyWithoutSellerNestedInputObjectSchema
});
