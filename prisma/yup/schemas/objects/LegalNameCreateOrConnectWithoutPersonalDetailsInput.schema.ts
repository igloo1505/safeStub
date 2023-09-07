// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameWhereUniqueInputObjectSchema } from '../internals';;
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema = Yup.object({
    where: LegalNameWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LegalNameCreateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema])
});
