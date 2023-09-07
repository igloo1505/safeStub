// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutHomeArenaInputObjectSchema,
TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutHomeArenaInputObjectSchema,
TeamUncheckedCreateWithoutHomeArenaInputObjectSchema])
});
