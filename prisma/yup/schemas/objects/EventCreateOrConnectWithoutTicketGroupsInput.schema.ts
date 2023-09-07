// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutTicketGroupsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketGroupsInputObjectSchema,
EventUncheckedCreateWithoutTicketGroupsInputObjectSchema])
});
