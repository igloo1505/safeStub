// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateManyLocationInputObjectSchema } from '../internals';

export const ArenaCreateManyLocationInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([ArenaCreateManyLocationInputObjectSchema,
Yup.array().of(ArenaCreateManyLocationInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
