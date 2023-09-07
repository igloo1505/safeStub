// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutTicketGroupsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedOneWithoutTicketGroupsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutTicketGroupsInputObjectSchema,
EventUncheckedCreateWithoutTicketGroupsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutTicketGroupsInputObjectSchema,  connect: EventWhereUniqueInputObjectSchema
});
