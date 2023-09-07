// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutParticipantsInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutParticipantsInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutParticipantsInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutParticipantsInputObjectSchema,
EventUncheckedCreateWithoutParticipantsInputObjectSchema])
});
