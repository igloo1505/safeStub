// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateManyAmenitiesInputEnvelopeObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventScalarWhereInputObjectSchema } from '../internals';

export const EventUncheckedUpdateManyWithoutAmenitiesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventCreateWithoutAmenitiesInputObjectSchema),
EventUncheckedCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutAmenitiesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutAmenitiesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema)]),  createMany: EventCreateManyAmenitiesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventUpdateManyWithWhereWithoutAmenitiesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([EventScalarWhereInputObjectSchema,
Yup.array().of(EventScalarWhereInputObjectSchema)])
});
