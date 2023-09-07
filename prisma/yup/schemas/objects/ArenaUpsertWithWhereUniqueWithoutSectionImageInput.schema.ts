// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from '../internals';

export const ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutSectionImageInputObjectSchema,
ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionImageInputObjectSchema,
ArenaUncheckedCreateWithoutSectionImageInputObjectSchema])
});
