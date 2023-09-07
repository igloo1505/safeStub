// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PurchaseHistoryWhereInputObjectSchema } from '../internals';

export const PurchaseHistoryRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([PurchaseHistoryWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([PurchaseHistoryWhereInputObjectSchema])
});
