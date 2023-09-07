// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamUpdateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from '../internals';

export const TeamUpsertWithoutLogosInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutLogosInputObjectSchema,
TeamUncheckedUpdateWithoutLogosInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutLogosInputObjectSchema,
TeamUncheckedCreateWithoutLogosInputObjectSchema])
});
