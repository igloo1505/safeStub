// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutSectionImageInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionImageInputObjectSchema,
ArenaUncheckedCreateWithoutSectionImageInputObjectSchema])
});
