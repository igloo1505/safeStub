// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { TeamRelationFilterObjectSchema } from '../internals';;
import { TeamWhereInputObjectSchema } from '../internals';

export const LogoWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LogoWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LogoWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LogoWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  path: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  width: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  height: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  rel: StringNullableListFilterObjectSchema,  url: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  teamId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  Team: Yup.mixed().oneOfSchemas([TeamRelationFilterObjectSchema,
TeamWhereInputObjectSchema])
});
