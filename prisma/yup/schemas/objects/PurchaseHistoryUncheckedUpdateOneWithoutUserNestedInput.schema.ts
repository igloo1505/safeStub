// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpsertWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutUserInputObjectSchema,  upsert: PurchaseHistoryUpsertWithoutUserInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PurchaseHistoryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PurchaseHistoryUpdateWithoutUserInputObjectSchema,
PurchaseHistoryUncheckedUpdateWithoutUserInputObjectSchema])
});
