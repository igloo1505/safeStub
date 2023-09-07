// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from '../internals';;
import { LogoCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';

export const TeamCreateInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([Yup.string()]),  colors: ColorsCreateNestedOneWithoutTeamInputObjectSchema,  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema,  Event: EventCreateNestedOneWithoutParticipantsInputObjectSchema,  logos: LogoCreateNestedManyWithoutTeamInputObjectSchema
});
