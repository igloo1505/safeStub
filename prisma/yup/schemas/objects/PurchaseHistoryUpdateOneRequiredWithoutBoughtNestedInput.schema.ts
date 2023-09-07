// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpsertWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpdateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema } from '../internals';

export const PurchaseHistoryUpdateOneRequiredWithoutBoughtNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema,  upsert: PurchaseHistoryUpsertWithoutBoughtInputObjectSchema,  connect: PurchaseHistoryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutBoughtInputObjectSchema])
});
