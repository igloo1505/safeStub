// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from '../internals';

export const ArenaCreateWithoutAmenitiesInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  name: Yup.string().required(),  events: EventCreateNestedManyWithoutArenaInputObjectSchema,  location: LocationCreateNestedOneWithoutArenaInputObjectSchema,  sections: ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema,  sectionImage: ImageCreateNestedOneWithoutArenaInputObjectSchema,  homeTeams: TeamCreateNestedManyWithoutHomeArenaInputObjectSchema
});
