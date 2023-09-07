// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { EnumROLEFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { EnumVERIFICATIONSTATUSFilterObjectSchema } from '../internals';

export const UserScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => UserScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  role: Yup.mixed().oneOfSchemas([EnumROLEFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  paymentAccountDetailsId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  verified: Yup.mixed().oneOfSchemas([EnumVERIFICATIONSTATUSFilterObjectSchema])
});
