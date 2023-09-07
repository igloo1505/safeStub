// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema = Yup.object({
    where: PurchaseHistoryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema])
});
