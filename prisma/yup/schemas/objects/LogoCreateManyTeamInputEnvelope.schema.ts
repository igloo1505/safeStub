// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoCreateManyTeamInputObjectSchema } from '../internals';

export const LogoCreateManyTeamInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([LogoCreateManyTeamInputObjectSchema,
Yup.array().of(LogoCreateManyTeamInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
