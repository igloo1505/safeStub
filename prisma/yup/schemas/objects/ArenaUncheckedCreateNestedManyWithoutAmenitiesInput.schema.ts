// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema } from '../internals';;
import { ArenaCreateManyAmenitiesInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaUncheckedCreateNestedManyWithoutAmenitiesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaCreateWithoutAmenitiesInputObjectSchema),
ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema)]),  createMany: ArenaCreateManyAmenitiesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)])
});
