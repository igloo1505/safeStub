// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameWhereUniqueInputObjectSchema } from '../internals';

export const LegalNameUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LegalNameCreateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  connect: LegalNameWhereUniqueInputObjectSchema
});
