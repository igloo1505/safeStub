// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateWithoutUserInputObjectSchema = Yup.object({
    bought: TransactionCreateNestedManyWithoutBuyerInputObjectSchema,  sold: TransactionCreateNestedManyWithoutSellerInputObjectSchema
});
