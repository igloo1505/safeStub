// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema } from '../internals';;
import { EventCreateManyArenaInputEnvelopeObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema } from '../internals';;
import { EventUpdateManyWithWhereWithoutArenaInputObjectSchema } from '../internals';;
import { EventScalarWhereInputObjectSchema } from '../internals';

export const EventUpdateManyWithoutArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutArenaInputObjectSchema,
Yup.array().of(EventCreateWithoutArenaInputObjectSchema),
EventUncheckedCreateWithoutArenaInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutArenaInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutArenaInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutArenaInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema,
Yup.array().of(EventUpsertWithWhereUniqueWithoutArenaInputObjectSchema)]),  createMany: EventCreateManyArenaInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema,
Yup.array().of(EventUpdateWithWhereUniqueWithoutArenaInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([EventUpdateManyWithWhereWithoutArenaInputObjectSchema,
Yup.array().of(EventUpdateManyWithWhereWithoutArenaInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([EventScalarWhereInputObjectSchema,
Yup.array().of(EventScalarWhereInputObjectSchema)])
});
