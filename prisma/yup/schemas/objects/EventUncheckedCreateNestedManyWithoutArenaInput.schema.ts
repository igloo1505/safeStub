// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { EventCreateManyArenaInputEnvelopeObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutArenaInputObjectSchema,
Yup.array().of(EventCreateWithoutArenaInputObjectSchema),
EventUncheckedCreateWithoutArenaInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutArenaInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutArenaInputObjectSchema)]),  createMany: EventCreateManyArenaInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)])
});
