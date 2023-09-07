// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LegalNameUpsertWithoutPersonalDetailsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LegalNameUpdateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LegalNameCreateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
