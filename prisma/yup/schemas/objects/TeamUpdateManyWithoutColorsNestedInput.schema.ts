// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema } from '../internals';;
import { TeamCreateManyColorsInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutColorsInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUpdateManyWithoutColorsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutColorsInputObjectSchema,
Yup.array().of(TeamCreateWithoutColorsInputObjectSchema),
TeamUncheckedCreateWithoutColorsInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutColorsInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutColorsInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutColorsInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema)]),  createMany: TeamCreateManyColorsInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutColorsInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutColorsInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
