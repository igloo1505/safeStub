// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';

export const EventUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([EventUpdateWithoutAmenitiesInputObjectSchema,
EventUncheckedUpdateWithoutAmenitiesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([EventCreateWithoutAmenitiesInputObjectSchema,
EventUncheckedCreateWithoutAmenitiesInputObjectSchema])
});
