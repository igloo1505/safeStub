// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutColorsInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutColorsInputObjectSchema,
TeamUncheckedCreateWithoutColorsInputObjectSchema])
});
