// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoWhereUniqueInputObjectSchema } from '../internals';;
import { LogoCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const LogoCreateOrConnectWithoutTeamInputObjectSchema = Yup.object({
    where: LogoWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LogoCreateWithoutTeamInputObjectSchema,
LogoUncheckedCreateWithoutTeamInputObjectSchema])
});
