// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { UserListRelationFilterObjectSchema } from '../internals';

export const PaymentAccountDetailsWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PaymentAccountDetailsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PaymentAccountDetailsWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PaymentAccountDetailsWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PaymentAccountDetailsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PaymentAccountDetailsWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  nameOnAccount: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  User: UserListRelationFilterObjectSchema
});
