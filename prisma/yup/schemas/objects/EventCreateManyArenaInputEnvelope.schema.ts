// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateManyArenaInputObjectSchema } from '../internals';

export const EventCreateManyArenaInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([EventCreateManyArenaInputObjectSchema,
Yup.array().of(EventCreateManyArenaInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
