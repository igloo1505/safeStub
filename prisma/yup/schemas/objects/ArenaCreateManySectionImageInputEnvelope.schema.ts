// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateManySectionImageInputObjectSchema } from '../internals';

export const ArenaCreateManySectionImageInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([ArenaCreateManySectionImageInputObjectSchema,
Yup.array().of(ArenaCreateManySectionImageInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
