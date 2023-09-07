// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateNestedManyWithoutSellerInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateWithoutBoughtInputObjectSchema = Yup.object({
    sold: TransactionCreateNestedManyWithoutSellerInputObjectSchema,  user: UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema
});
