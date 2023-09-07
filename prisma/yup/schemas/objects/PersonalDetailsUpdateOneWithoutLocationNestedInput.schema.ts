// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PersonalDetailsCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUpsertWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsWhereUniqueInputObjectSchema } from '../internals';;
import { PersonalDetailsUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';

export const PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PersonalDetailsCreateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedCreateWithoutLocationInputObjectSchema]),  connectOrCreate: PersonalDetailsCreateOrConnectWithoutLocationInputObjectSchema,  upsert: PersonalDetailsUpsertWithoutLocationInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: PersonalDetailsWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PersonalDetailsUpdateWithoutLocationInputObjectSchema,
PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema])
});
