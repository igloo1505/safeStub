// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryUpdateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from '../internals';

export const PurchaseHistoryUpsertWithoutBoughtInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema])
});
