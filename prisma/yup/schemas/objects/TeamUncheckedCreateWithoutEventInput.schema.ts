// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoUncheckedCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';

export const TeamUncheckedCreateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([Yup.string()]),  homeArenaId: Yup.mixed().oneOfSchemas([Yup.number()]),  colorsId: Yup.mixed().oneOfSchemas([Yup.number()]),  logos: LogoUncheckedCreateNestedManyWithoutTeamInputObjectSchema
});
