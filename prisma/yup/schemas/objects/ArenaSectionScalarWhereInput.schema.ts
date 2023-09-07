// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';

export const ArenaSectionScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaSectionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaSectionScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaSectionScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaSectionScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaSectionScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  arenaId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()])
});
