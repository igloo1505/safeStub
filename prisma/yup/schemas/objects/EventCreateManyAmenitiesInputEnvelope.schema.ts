// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateManyAmenitiesInputObjectSchema } from '../internals';

export const EventCreateManyAmenitiesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([EventCreateManyAmenitiesInputObjectSchema,
Yup.array().of(EventCreateManyAmenitiesInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
