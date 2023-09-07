// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUpsertWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutParticipantsInputObjectSchema } from '../internals';

export const EventUpdateOneWithoutParticipantsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
EventUncheckedCreateWithoutParticipantsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutParticipantsInputObjectSchema,  upsert: EventUpsertWithoutParticipantsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutParticipantsInputObjectSchema,
EventUncheckedUpdateWithoutParticipantsInputObjectSchema])
});
