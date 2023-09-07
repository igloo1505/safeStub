// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutSectionImageInputObjectSchema } from '../internals';;
import { ArenaCreateManySectionImageInputEnvelopeObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaUncheckedCreateNestedManyWithoutSectionImageInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaCreateWithoutSectionImageInputObjectSchema),
ArenaUncheckedCreateWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaUncheckedCreateWithoutSectionImageInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ArenaCreateOrConnectWithoutSectionImageInputObjectSchema,
Yup.array().of(ArenaCreateOrConnectWithoutSectionImageInputObjectSchema)]),  createMany: ArenaCreateManySectionImageInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ArenaWhereUniqueInputObjectSchema,
Yup.array().of(ArenaWhereUniqueInputObjectSchema)])
});
