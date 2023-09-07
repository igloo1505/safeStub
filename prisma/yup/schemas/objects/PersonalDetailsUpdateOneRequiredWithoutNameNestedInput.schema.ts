// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUpsertWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsUpdateWithoutNameInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutNameInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutNameInputObjectSchema,  upsert: PersonalDetailsUpsertWithoutNameInputObjectSchema,  connect: PersonalDetailsWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutNameInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema])
});
