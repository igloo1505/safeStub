// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryUpdateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from '../internals';

export const PurchaseHistoryUpsertWithoutSoldInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema])
});
