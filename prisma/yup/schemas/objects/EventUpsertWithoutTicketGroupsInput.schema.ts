// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventUpdateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from '../internals';

export const EventUpsertWithoutTicketGroupsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([EventUpdateWithoutTicketGroupsInputObjectSchema,
EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketGroupsInputObjectSchema,
EventUncheckedCreateWithoutTicketGroupsInputObjectSchema])
});
