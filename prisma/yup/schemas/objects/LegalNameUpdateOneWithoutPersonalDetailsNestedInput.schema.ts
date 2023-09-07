// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LegalNameCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUpsertWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameWhereUniqueInputObjectSchema } from '../internals';;
import { LegalNameUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';;
import { LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from '../internals';

export const LegalNameUpdateOneWithoutPersonalDetailsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LegalNameCreateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema]),  connectOrCreate: LegalNameCreateOrConnectWithoutPersonalDetailsInputObjectSchema,  upsert: LegalNameUpsertWithoutPersonalDetailsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: LegalNameWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LegalNameUpdateWithoutPersonalDetailsInputObjectSchema,
LegalNameUncheckedUpdateWithoutPersonalDetailsInputObjectSchema])
});
