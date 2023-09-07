// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateManyAmenitiesInputObjectSchema } from '../internals';

export const ArenaCreateManyAmenitiesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([ArenaCreateManyAmenitiesInputObjectSchema,
Yup.array().of(ArenaCreateManyAmenitiesInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
