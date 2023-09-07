// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaScalarWhereInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateManyWithoutLocationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutLocationInputObjectSchema,
Yup.array().of(ArenaCreateWithoutLocationInputObjectSchema),
ArenaUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutLocationInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema)]),  createMany: ArenaCreateManyLocationInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema,
Yup.array().of(ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ArenaScalarWhereInputObjectSchema,
Yup.array().of(ArenaScalarWhereInputObjectSchema)])
});
