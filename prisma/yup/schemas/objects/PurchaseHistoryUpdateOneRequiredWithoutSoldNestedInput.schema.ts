// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpsertWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpdateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateOneRequiredWithoutSoldNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema,  upsert: PurchaseHistoryUpsertWithoutSoldInputObjectSchema,  connect: PurchaseHistoryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutSoldInputObjectSchema])
});
