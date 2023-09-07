// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupUncheckedCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { TagUncheckedCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateNestedManyWithoutEventInputObjectSchema } from '../internals';

export const EventUncheckedCreateWithoutArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  amenitiesId: Yup.number().required(),  date: Yup.date().required(),  title: Yup.string().required(),  description: Yup.string().required(),  tickets: TicketUncheckedCreateNestedManyWithoutEventInputObjectSchema,  ticketGroups: TicketGroupUncheckedCreateNestedManyWithoutEventInputObjectSchema,  tags: TagUncheckedCreateNestedManyWithoutEventInputObjectSchema,  participants: TeamUncheckedCreateNestedManyWithoutEventInputObjectSchema
});
