// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoWhereUniqueInputObjectSchema } from '../internals';;
import { LogoUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema = Yup.object({
    where: LogoWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LogoUpdateWithoutTeamInputObjectSchema,
LogoUncheckedUpdateWithoutTeamInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LogoCreateWithoutTeamInputObjectSchema,
LogoUncheckedCreateWithoutTeamInputObjectSchema])
});
