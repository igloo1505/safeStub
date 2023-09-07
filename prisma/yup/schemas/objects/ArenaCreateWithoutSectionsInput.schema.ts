// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from '../internals';

export const ArenaCreateWithoutSectionsInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  name: Yup.string().required(),  events: EventCreateNestedManyWithoutArenaInputObjectSchema,  location: LocationCreateNestedOneWithoutArenaInputObjectSchema,  amenities: ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema,  sectionImage: ImageCreateNestedOneWithoutArenaInputObjectSchema,  homeTeams: TeamCreateNestedManyWithoutHomeArenaInputObjectSchema
});
