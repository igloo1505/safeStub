// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { TeamListRelationFilterObjectSchema } from '../internals';

export const ColorsWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ColorsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ColorsWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ColorsWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ColorsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ColorsWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  primary: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  secondary: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  Team: TeamListRelationFilterObjectSchema
});
