// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from '../internals';

export const ArenaCreateWithoutEventsInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string()]),  name: Yup.string().required(),  location: LocationCreateNestedOneWithoutArenaInputObjectSchema,  sections: ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema,  amenities: ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema,  sectionImage: ImageCreateNestedOneWithoutArenaInputObjectSchema,  homeTeams: TeamCreateNestedManyWithoutHomeArenaInputObjectSchema
});
