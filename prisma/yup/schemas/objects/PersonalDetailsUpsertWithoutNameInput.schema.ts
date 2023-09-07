// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsUpdateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from '../internals';

export const PersonalDetailsUpsertWithoutNameInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema])
});
