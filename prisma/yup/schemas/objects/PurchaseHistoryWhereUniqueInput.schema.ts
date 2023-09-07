// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const PurchaseHistoryWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number()
});
