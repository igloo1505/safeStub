// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PersonalDetailsUpsertWithoutUserInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema])
});
