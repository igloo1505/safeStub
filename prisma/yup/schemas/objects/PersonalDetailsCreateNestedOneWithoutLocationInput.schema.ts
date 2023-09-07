// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';

export const PersonalDetailsCreateNestedOneWithoutLocationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema,  connect: PersonalDetailsWhereUniqueInputObjectSchema
});
