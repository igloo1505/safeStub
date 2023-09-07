// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { LegalNameRelationFilterObjectSchema } from '../internals';;
import { LegalNameWhereInputObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';

export const PersonalDetailsWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PersonalDetailsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PersonalDetailsWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PersonalDetailsWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PersonalDetailsWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PersonalDetailsWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  userId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([LegalNameRelationFilterObjectSchema,
LegalNameWhereInputObjectSchema]),  location: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema])
});
