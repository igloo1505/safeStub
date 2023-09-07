// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { ArenaCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaCreateNestedManyWithoutLocationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutLocationInputObjectSchema,
Yup.array().of(ArenaCreateWithoutLocationInputObjectSchema),
ArenaUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutLocationInputObjectSchema)]),  createMany: ArenaCreateManyLocationInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)])
});
