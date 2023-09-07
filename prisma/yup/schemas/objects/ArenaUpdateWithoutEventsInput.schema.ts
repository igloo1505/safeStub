// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ImageUpdateOneWithoutArenaNestedInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema } from '../internals';

export const ArenaUpdateWithoutEventsInputObjectSchema = Yup.object({
    uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  location: LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  sections: ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema,  amenities: ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  sectionImage: ImageUpdateOneWithoutArenaNestedInputObjectSchema,  homeTeams: TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema
});
