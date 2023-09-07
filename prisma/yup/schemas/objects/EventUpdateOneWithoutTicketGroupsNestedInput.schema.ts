// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUpsertWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema } from '../internals';

export const EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketGroupsInputObjectSchema,
EventUncheckedCreateWithoutTicketGroupsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutTicketGroupsInputObjectSchema,  upsert: EventUpsertWithoutTicketGroupsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutTicketGroupsInputObjectSchema,
EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema])
});
