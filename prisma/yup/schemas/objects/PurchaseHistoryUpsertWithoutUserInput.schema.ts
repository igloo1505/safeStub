// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PurchaseHistoryUpsertWithoutUserInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema])
});
