// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';

export const LogoScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LogoScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  path: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  width: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  height: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  rel: StringNullableListFilterObjectSchema,  url: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  teamId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()])
});
