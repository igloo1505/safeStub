// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema } from '../internals';

export const ArenaUpdateWithoutSectionImageInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  events: EventUpdateManyWithoutArenaNestedInputObjectSchema,  location: LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  sections: ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema,  amenities: ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  homeTeams: TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema
});
