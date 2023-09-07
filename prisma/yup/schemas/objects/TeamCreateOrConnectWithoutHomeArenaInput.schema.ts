// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutHomeArenaInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutHomeArenaInputObjectSchema,
TeamUncheckedCreateWithoutHomeArenaInputObjectSchema])
});
