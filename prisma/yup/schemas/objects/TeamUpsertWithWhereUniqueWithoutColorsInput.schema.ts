// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutColorsInputObjectSchema,
TeamUncheckedUpdateWithoutColorsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutColorsInputObjectSchema,
TeamUncheckedCreateWithoutColorsInputObjectSchema])
});
