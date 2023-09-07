// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumLeaguesFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumSportsFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema } from '../internals';

export const TeamUpdateManyMutationInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema]),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  displayName: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  nickname: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  league: Yup.mixed().oneOfSchemas([EnumLeaguesFieldUpdateOperationsInputObjectSchema]),  sport: Yup.mixed().oneOfSchemas([EnumSportsFieldUpdateOperationsInputObjectSchema]),  conference: Yup.mixed().oneOfSchemas([NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema]),  division: Yup.mixed().oneOfSchemas([NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema])
});
