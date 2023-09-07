// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { PersonalDetailsRelationFilterObjectSchema } from '../internals';;
import { PersonalDetailsWhereInputObjectSchema } from '../internals';

export const LegalNameWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LegalNameWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LegalNameWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LegalNameWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LegalNameWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LegalNameWhereInputObjectSchema.default(undefined)))]),  first: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  middle: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  last: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  detailsId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  personalDetails: Yup.mixed().oneOfSchemas([PersonalDetailsRelationFilterObjectSchema,
PersonalDetailsWhereInputObjectSchema])
});
