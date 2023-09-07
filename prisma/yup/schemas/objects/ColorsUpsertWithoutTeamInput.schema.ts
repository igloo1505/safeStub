// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsCreateWithoutTeamInputObjectSchema } from '../internals';;
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const ColorsUpsertWithoutTeamInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ColorsUpdateWithoutTeamInputObjectSchema,
ColorsUncheckedUpdateWithoutTeamInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ColorsCreateWithoutTeamInputObjectSchema,
ColorsUncheckedCreateWithoutTeamInputObjectSchema])
});
