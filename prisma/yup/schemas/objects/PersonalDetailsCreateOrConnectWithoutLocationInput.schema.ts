// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema = Yup.object({
    where: PersonalDetailsWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema])
});
