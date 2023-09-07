// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';;
import { EnumUSSTATENullableFilterObjectSchema } from '../internals';;
import { FloatNullableFilterObjectSchema } from '../internals';;
import { EnumCountryFilterObjectSchema } from '../internals';;
import { ArenaListRelationFilterObjectSchema } from '../internals';;
import { PersonalDetailsRelationFilterObjectSchema } from '../internals';;
import { PersonalDetailsWhereInputObjectSchema } from '../internals';

export const LocationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  uniqueKey: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  street: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  zip: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  cityId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  state: Yup.mixed().oneOfSchemas([EnumUSSTATENullableFilterObjectSchema]),  lat: Yup.mixed().oneOfSchemas([FloatNullableFilterObjectSchema,
Yup.number()]),  long: Yup.mixed().oneOfSchemas([FloatNullableFilterObjectSchema,
Yup.number()]),  country: Yup.mixed().oneOfSchemas([EnumCountryFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  arena: ArenaListRelationFilterObjectSchema,  personalDetails: Yup.mixed().oneOfSchemas([PersonalDetailsRelationFilterObjectSchema,
PersonalDetailsWhereInputObjectSchema])
});
