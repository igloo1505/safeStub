// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema } from '../internals';

export const ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutSectionImageInputObjectSchema,
ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema])
});
