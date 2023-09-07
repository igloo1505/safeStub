// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutHomeArenaInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutHomeArenaInputObjectSchema,
TeamUncheckedUpdateWithoutHomeArenaInputObjectSchema])
});
