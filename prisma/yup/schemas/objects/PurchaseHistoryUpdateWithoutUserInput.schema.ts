// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUpdateManyWithoutBuyerNestedInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithoutSellerNestedInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateWithoutUserInputObjectSchema = Yup.object({
    bought: TransactionUpdateManyWithoutBuyerNestedInputObjectSchema,  sold: TransactionUpdateManyWithoutSellerNestedInputObjectSchema
});
