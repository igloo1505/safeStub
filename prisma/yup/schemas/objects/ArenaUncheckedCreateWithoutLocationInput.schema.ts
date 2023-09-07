// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema } from '../internals';

export const ArenaUncheckedCreateWithoutLocationInputObjectSchema = Yup.object({
    id: Yup.number(),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  name: Yup.string().required(),  arenaAmenitiesId: Yup.number().required(),  sectionImageId: Yup.mixed().oneOfSchemas([Yup.number()]),  events: EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema,  sections: ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema,  homeTeams: TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema
});
