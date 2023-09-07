// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamScalarWhereInputObjectSchema } from '../internals';;
import { TeamUpdateManyMutationInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutHomeTeamsInputObjectSchema } from '../internals';

export const TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema = Yup.object({
    where: TeamScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateManyMutationInputObjectSchema,
TeamUncheckedUpdateManyWithoutHomeTeamsInputObjectSchema])
});
