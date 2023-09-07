// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumNFLTeamNameWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumLeaguesWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumSportsWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { IntNullableWithAggregatesFilterObjectSchema } from '../internals';

export const TeamScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntWithAggregatesFilterObjectSchema,
Yup.number()]),  uniqueKey: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([EnumNFLTeamNameWithAggregatesFilterObjectSchema]),  abbreviation: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  league: Yup.mixed().oneOfSchemas([EnumLeaguesWithAggregatesFilterObjectSchema]),  sport: Yup.mixed().oneOfSchemas([EnumSportsWithAggregatesFilterObjectSchema]),  conference: Yup.mixed().oneOfSchemas([EnumNFL_ConferenceNullableWithAggregatesFilterObjectSchema]),  division: Yup.mixed().oneOfSchemas([EnumNFL_DivisionNullableWithAggregatesFilterObjectSchema]),  homeArenaId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()]),  colorsId: Yup.mixed().oneOfSchemas([IntNullableWithAggregatesFilterObjectSchema,
Yup.number()])
});
