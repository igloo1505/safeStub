// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaSectionCreateManyArenaInputObjectSchema } from '../internals';

export const ArenaSectionCreateManyArenaInputEnvelopeObjectSchema = Yup.object({
    data: Yup.mixed().oneOfSchemas([ArenaSectionCreateManyArenaInputObjectSchema,
Yup.array().of(ArenaSectionCreateManyArenaInputObjectSchema)]),  skipDuplicates: Yup.boolean()
});
