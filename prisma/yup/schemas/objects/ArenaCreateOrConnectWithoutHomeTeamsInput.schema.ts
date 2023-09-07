// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutHomeTeamsInputObjectSchema,
ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema])
});
