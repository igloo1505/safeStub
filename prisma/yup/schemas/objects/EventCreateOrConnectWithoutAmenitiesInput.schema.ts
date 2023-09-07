// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';

export const EventCreateOrConnectWithoutAmenitiesInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([EventCreateWithoutAmenitiesInputObjectSchema,
EventUncheckedCreateWithoutAmenitiesInputObjectSchema])
});
