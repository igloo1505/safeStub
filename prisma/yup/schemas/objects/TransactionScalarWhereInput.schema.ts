// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const TransactionScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TransactionScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  price: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  paymentId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  sellerId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  buyerId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  date: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
