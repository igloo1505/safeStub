// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedOneWithoutParticipantsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
EventUncheckedCreateWithoutParticipantsInputObjectSchema]),  connectOrCreate: EventCreateOrConnectWithoutParticipantsInputObjectSchema,  connect: EventWhereUniqueInputObjectSchema
});
