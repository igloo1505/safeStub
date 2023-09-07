// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateManyColorsInputObjectSchema } from '../internals';

export const TeamCreateManyColorsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([TeamCreateManyColorsInputObjectSchema,
Yup.array().of(TeamCreateManyColorsInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
