// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { LogoCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { LogoCreateManyTeamInputEnvelopeObjectSchema } from '../internals';;
import { LogoWhereUniqueInputObjectSchema } from '../internals';

export const LogoUncheckedCreateNestedManyWithoutTeamInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LogoCreateWithoutTeamInputObjectSchema,
Yup.array().of(LogoCreateWithoutTeamInputObjectSchema),
LogoUncheckedCreateWithoutTeamInputObjectSchema,
Yup.array().of(LogoUncheckedCreateWithoutTeamInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([LogoCreateOrConnectWithoutTeamInputObjectSchema,
Yup.array().of(LogoCreateOrConnectWithoutTeamInputObjectSchema)]),  createMany: LogoCreateManyTeamInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([LogoWhereUniqueInputObjectSchema,
Yup.array().of(LogoWhereUniqueInputObjectSchema)])
});
