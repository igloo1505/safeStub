// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateWithoutEventInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutEventInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutEventInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutEventInputObjectSchema,
TeamUncheckedUpdateWithoutEventInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutEventInputObjectSchema,
TeamUncheckedCreateWithoutEventInputObjectSchema])
});
