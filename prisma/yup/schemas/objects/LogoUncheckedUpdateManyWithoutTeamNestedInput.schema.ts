// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema } from '../internals';;
import { LogoCreateManyTeamInputEnvelopeObjectSchema } from '../internals';;
import { LogoWhereUniqueInputObjectSchema } from '../internals';;
import { LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUpdateManyWithWhereWithoutTeamInputObjectSchema } from '../internals';;
import { LogoScalarWhereInputObjectSchema } from '../internals';

export const LogoUncheckedUpdateManyWithoutTeamNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LogoCreateWithoutTeamInputObjectSchema,
Yup.array().of(LogoCreateWithoutTeamInputObjectSchema),
LogoUncheckedCreateWithoutTeamInputObjectSchema,
Yup.array().of(LogoUncheckedCreateWithoutTeamInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([LogoCreateOrConnectWithoutTeamInputObjectSchema,
Yup.array().of(LogoCreateOrConnectWithoutTeamInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema,
Yup.array().of(LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema)]),  createMany: LogoCreateManyTeamInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([LogoWhereUniqueInputObjectSchema,
Yup.array().of(LogoWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([LogoWhereUniqueInputObjectSchema,
Yup.array().of(LogoWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([LogoWhereUniqueInputObjectSchema,
Yup.array().of(LogoWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([LogoWhereUniqueInputObjectSchema,
Yup.array().of(LogoWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema,
Yup.array().of(LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([LogoUpdateManyWithWhereWithoutTeamInputObjectSchema,
Yup.array().of(LogoUpdateManyWithWhereWithoutTeamInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([LogoScalarWhereInputObjectSchema,
Yup.array().of(LogoScalarWhereInputObjectSchema)])
});
