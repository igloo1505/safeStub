// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamScalarWhereInputObjectSchema } from '../internals';;
import { TeamUpdateManyMutationInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutTeamInputObjectSchema } from '../internals';

export const TeamUpdateManyWithWhereWithoutColorsInputObjectSchema = Yup.object({
    where: TeamScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateManyMutationInputObjectSchema,
TeamUncheckedUpdateManyWithoutTeamInputObjectSchema])
});
