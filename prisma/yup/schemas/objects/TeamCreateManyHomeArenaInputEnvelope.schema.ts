// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateManyHomeArenaInputObjectSchema } from '../internals';

export const TeamCreateManyHomeArenaInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TeamCreateManyHomeArenaInputObjectSchema,
Yup.array().of(TeamCreateManyHomeArenaInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
