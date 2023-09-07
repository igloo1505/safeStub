// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { TransactionListRelationFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';

export const PurchaseHistoryWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PurchaseHistoryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PurchaseHistoryWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PurchaseHistoryWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PurchaseHistoryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PurchaseHistoryWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  userId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  bought: TransactionListRelationFilterObjectSchema,  sold: TransactionListRelationFilterObjectSchema,  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema])
});
