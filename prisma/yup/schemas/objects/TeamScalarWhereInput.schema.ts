// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumNFLTeamNameFilterObjectSchema } from '../internals';;
import { EnumLeaguesFilterObjectSchema } from '../internals';;
import { EnumSportsFilterObjectSchema } from '../internals';;
import { EnumNFL_ConferenceNullableFilterObjectSchema } from '../internals';;
import { EnumNFL_DivisionNullableFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';

export const TeamScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  uniqueKey: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([EnumNFLTeamNameFilterObjectSchema]),  abbreviation: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  league: Yup.mixed().oneOfSchemas([EnumLeaguesFilterObjectSchema]),  sport: Yup.mixed().oneOfSchemas([EnumSportsFilterObjectSchema]),  conference: Yup.mixed().oneOfSchemas([EnumNFL_ConferenceNullableFilterObjectSchema]),  division: Yup.mixed().oneOfSchemas([EnumNFL_DivisionNullableFilterObjectSchema]),  homeArenaId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  colorsId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()])
});
