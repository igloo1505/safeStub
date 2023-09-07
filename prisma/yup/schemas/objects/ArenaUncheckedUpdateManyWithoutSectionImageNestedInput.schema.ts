// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaCreateManySectionImageInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaScalarWhereInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateManyWithoutSectionImageNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaCreateWithoutSectionImageInputObjectSchema),
ArenaUncheckedCreateWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutSectionImageInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutSectionImageInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema)]),  createMany: ArenaCreateManySectionImageInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaUpdateManyWithWhereWithoutSectionImageInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ArenaScalarWhereInputObjectSchema,
Yup.array().of(ArenaScalarWhereInputObjectSchema)])
});
