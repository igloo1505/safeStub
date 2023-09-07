// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';

export const TagScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TagScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TagScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TagScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TagScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TagScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  value: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
