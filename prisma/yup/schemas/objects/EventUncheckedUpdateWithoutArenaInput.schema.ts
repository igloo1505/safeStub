// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumCATEGORYFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { TagUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from '../internals';

export const EventUncheckedUpdateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  category: Yup.mixed().oneOfSchemas([EnumCATEGORYFieldUpdateOperationsInputObjectSchema]),  amenitiesId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  date: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  tickets: TicketUncheckedUpdateManyWithoutEventNestedInputObjectSchema,  ticketGroups: TicketGroupUncheckedUpdateManyWithoutEventNestedInputObjectSchema,  tags: TagUncheckedUpdateManyWithoutEventNestedInputObjectSchema,  participants: TeamUncheckedUpdateManyWithoutEventNestedInputObjectSchema
});
