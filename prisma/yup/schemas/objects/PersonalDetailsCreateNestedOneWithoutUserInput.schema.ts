// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';

export const PersonalDetailsCreateNestedOneWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema,  connect: PersonalDetailsWhereUniqueInputObjectSchema
});
