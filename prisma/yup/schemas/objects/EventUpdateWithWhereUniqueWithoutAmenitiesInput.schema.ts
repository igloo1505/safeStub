// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventWhereUniqueInputObjectSchema } from '../internals';;
import { EventUpdateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateWithoutAmenitiesInputObjectSchema } from '../internals';

export const EventUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema = Yup.object({
    where: EventWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([EventUpdateWithoutAmenitiesInputObjectSchema,
EventUncheckedUpdateWithoutAmenitiesInputObjectSchema])
});
