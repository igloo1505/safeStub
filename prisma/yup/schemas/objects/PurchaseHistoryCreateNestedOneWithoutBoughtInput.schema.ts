// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema } from '../internals';;
import { PurchaseHistoryWhereUniqueInputObjectSchema } from '../internals';

export const PurchaseHistoryCreateNestedOneWithoutBoughtInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PurchaseHistoryCreateWithoutBoughtInputObjectSchema,
PurchaseHistoryUncheckedCreateWithoutBoughtInputObjectSchema]),  connectOrCreate: PurchaseHistoryCreateOrConnectWithoutBoughtInputObjectSchema,  connect: PurchaseHistoryWhereUniqueInputObjectSchema
});
