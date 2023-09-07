// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from '../internals';;
import { LogoCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';

export const TeamCreateWithoutColorsInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([Yup.string()]),  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema,  Event: EventCreateNestedOneWithoutParticipantsInputObjectSchema,  logos: LogoCreateNestedManyWithoutTeamInputObjectSchema
});
