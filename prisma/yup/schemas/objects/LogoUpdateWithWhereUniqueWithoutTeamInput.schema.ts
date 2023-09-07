// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoWhereUniqueInputObjectSchema } from '../internals';;
import { LogoUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';

export const LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema = Yup.object({
    where: LogoWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([LogoUpdateWithoutTeamInputObjectSchema,
LogoUncheckedUpdateWithoutTeamInputObjectSchema])
});
