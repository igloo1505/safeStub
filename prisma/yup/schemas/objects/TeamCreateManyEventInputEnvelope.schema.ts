// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateManyEventInputObjectSchema } from '../internals';

export const TeamCreateManyEventInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TeamCreateManyEventInputObjectSchema,
Yup.array().of(TeamCreateManyEventInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
