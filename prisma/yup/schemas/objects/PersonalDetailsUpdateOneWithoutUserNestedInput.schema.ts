// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUpsertWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateOneWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutUserInputObjectSchema,  upsert: PersonalDetailsUpsertWithoutUserInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PersonalDetailsWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutUserInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema])
});
