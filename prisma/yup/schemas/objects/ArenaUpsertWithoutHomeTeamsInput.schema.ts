// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaUpdateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from '../internals';

export const ArenaUpsertWithoutHomeTeamsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema])
});
