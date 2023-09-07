// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutColorsInputObjectSchema } from '../internals';;
import { TeamCreateManyColorsInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamCreateNestedManyWithoutColorsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutColorsInputObjectSchema,
Yup.array().of(TeamCreateWithoutColorsInputObjectSchema),
TeamUncheckedCreateWithoutColorsInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutColorsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutColorsInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutColorsInputObjectSchema)]),  createMany: TeamCreateManyColorsInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
