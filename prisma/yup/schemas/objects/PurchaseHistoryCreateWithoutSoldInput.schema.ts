// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';;
import { UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateWithoutSoldInputObjectSchema = Yup.object({
    bought: TransactionCreateNestedManyWithoutBuyerInputObjectSchema,  user: UserCreateNestedOneWithoutPurchaseHistoryInputObjectSchema
});
