// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutEventInputObjectSchema,
TeamUncheckedUpdateWithoutEventInputObjectSchema])
});
