// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedCreateNestedOneWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema,  connect: PurchaseHistoryWhereUniqueInputObjectSchema
});
