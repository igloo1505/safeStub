// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: PersonalDetailsWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema])
});
