// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateNestedOneWithoutSoldInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutSoldInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutSoldInputObjectSchema,  connect: PurchaseHistoryWhereUniqueInputObjectSchema
});
