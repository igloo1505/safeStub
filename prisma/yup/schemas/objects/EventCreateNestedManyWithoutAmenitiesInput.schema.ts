// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateOrConnectWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateManyAmenitiesInputEnvelopeObjectSchema } from '../internals';;
import { EventWhereUniqueInputObjectSchema } from '../internals';

export const EventCreateNestedManyWithoutAmenitiesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([EventCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventCreateWithoutAmenitiesInputObjectSchema),
EventUncheckedCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventUncheckedCreateWithoutAmenitiesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([EventCreateOrConnectWithoutAmenitiesInputObjectSchema,
Yup.array().of(EventCreateOrConnectWithoutAmenitiesInputObjectSchema)]),  createMany: EventCreateManyAmenitiesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([EventWhereUniqueInputObjectSchema,
Yup.array().of(EventWhereUniqueInputObjectSchema)])
});
