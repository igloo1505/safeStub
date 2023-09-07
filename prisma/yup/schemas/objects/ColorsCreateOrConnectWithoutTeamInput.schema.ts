// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsWhereUniqueInputObjectSchema } from '../internals';;
import { ColorsCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const ColorsCreateOrConnectWithoutTeamInputObjectSchema = Yup.object({
    where: ColorsWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ColorsCreateWithoutTeamInputObjectSchema,
ColorsUncheckedCreateWithoutTeamInputObjectSchema])
});
