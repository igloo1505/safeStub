// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from '../internals';

export const PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema = Yup.object({
    where: PersonalDetailsWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema])
});
