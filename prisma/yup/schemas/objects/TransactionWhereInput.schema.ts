// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { PurchaseHistoryRelationFilterObjectSchema } from '../internals';;
import { PurchaseHistoryWhereInputObjectSchema } from '../internals';

export const TransactionWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TransactionWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  price: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  paymentId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sellerId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  buyerId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  date: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  seller: Yup.mixed().oneOfSchemas([PurchaseHistoryRelationFilterObjectSchema,
PurchaseHistoryWhereInputObjectSchema]),  buyer: Yup.mixed().oneOfSchemas([PurchaseHistoryRelationFilterObjectSchema,
PurchaseHistoryWhereInputObjectSchema])
});
