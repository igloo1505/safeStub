// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';

export const PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema,  connect: PersonalDetailsWhereUniqueInputObjectSchema
});
