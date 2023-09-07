// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const PersonalDetailsUpsertWithoutLocationInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema])
});
