// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: PurchaseHistoryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema])
});
