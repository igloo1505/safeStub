// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamScalarWhereInputObjectSchema } from '../internals';;
import { TeamUpdateManyMutationInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutParticipantsInputObjectSchema } from '../internals';

export const TeamUpdateManyWithWhereWithoutEventInputObjectSchema = Yup.object({
    where: TeamScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateManyMutationInputObjectSchema,
TeamUncheckedUpdateManyWithoutParticipantsInputObjectSchema])
});
