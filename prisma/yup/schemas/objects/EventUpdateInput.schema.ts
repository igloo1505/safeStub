// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EnumCATEGORYFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from '../internals';;
import { TicketUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { TicketGroupUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema } from '../internals';;
import { TagUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';

export const EventUpdateInputObjectSchema = Yup.object({
    category: Yup.mixed().oneOfSchemas([EnumCATEGORYFieldUpdateOperationsInputObjectSchema]),  date: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  arena: ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema,  tickets: TicketUpdateManyWithoutEventNestedInputObjectSchema,  ticketGroups: TicketGroupUpdateManyWithoutEventNestedInputObjectSchema,  amenities: ArenaAmenitiesUpdateOneRequiredWithoutEventNestedInputObjectSchema,  tags: TagUpdateManyWithoutEventNestedInputObjectSchema,  participants: TeamUpdateManyWithoutEventNestedInputObjectSchema
});
