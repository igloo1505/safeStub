// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  uniqueKey: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  locationId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  events: EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema,  sections: ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema,  homeTeams: TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema
});
