// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema = Yup.object({
    where: PurchaseHistoryWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema])
});
