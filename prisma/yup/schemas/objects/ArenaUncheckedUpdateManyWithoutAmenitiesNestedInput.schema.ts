// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaCreateManyAmenitiesInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaScalarWhereInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateManyWithoutAmenitiesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaCreateWithoutAmenitiesInputObjectSchema),
ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema)]),  createMany: ArenaCreateManyAmenitiesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaUpdateManyWithWhereWithoutAmenitiesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ArenaScalarWhereInputObjectSchema,
Yup.array().of(ArenaScalarWhereInputObjectSchema)])
});
