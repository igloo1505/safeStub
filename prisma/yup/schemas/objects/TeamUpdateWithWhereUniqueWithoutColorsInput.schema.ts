// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutColorsInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutColorsInputObjectSchema,
TeamUncheckedUpdateWithoutColorsInputObjectSchema])
});
