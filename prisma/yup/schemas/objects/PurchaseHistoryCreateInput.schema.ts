// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';;
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateInputObjectSchema = Yup.object({
    bought: TransactionCreateNestedManyWithoutBuyerInputObjectSchema,  sold: TransactionCreateNestedManyWithoutSellerInputObjectSchema,  user: UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema
});
