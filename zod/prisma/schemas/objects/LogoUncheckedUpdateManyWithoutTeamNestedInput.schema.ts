import { z } from 'zod';
import { LogoCreateWithoutTeamInputObjectSchema } from './LogoCreateWithoutTeamInput.schema';
import { LogoUncheckedCreateWithoutTeamInputObjectSchema } from './LogoUncheckedCreateWithoutTeamInput.schema';
import { LogoCreateOrConnectWithoutTeamInputObjectSchema } from './LogoCreateOrConnectWithoutTeamInput.schema';
import { LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema } from './LogoUpsertWithWhereUniqueWithoutTeamInput.schema';
import { LogoCreateManyTeamInputEnvelopeObjectSchema } from './LogoCreateManyTeamInputEnvelope.schema';
import { LogoWhereUniqueInputObjectSchema } from './LogoWhereUniqueInput.schema';
import { LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema } from './LogoUpdateWithWhereUniqueWithoutTeamInput.schema';
import { LogoUpdateManyWithWhereWithoutTeamInputObjectSchema } from './LogoUpdateManyWithWhereWithoutTeamInput.schema';
import { LogoScalarWhereInputObjectSchema } from './LogoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUncheckedUpdateManyWithoutTeamNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LogoCreateWithoutTeamInputObjectSchema),
          z.lazy(() => LogoCreateWithoutTeamInputObjectSchema).array(),
          z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema),
          z.lazy(() => LogoUncheckedCreateWithoutTeamInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LogoCreateOrConnectWithoutTeamInputObjectSchema),
          z.lazy(() => LogoCreateOrConnectWithoutTeamInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema),
          z
            .lazy(() => LogoUpsertWithWhereUniqueWithoutTeamInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LogoCreateManyTeamInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LogoWhereUniqueInputObjectSchema),
          z.lazy(() => LogoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LogoWhereUniqueInputObjectSchema),
          z.lazy(() => LogoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LogoWhereUniqueInputObjectSchema),
          z.lazy(() => LogoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LogoWhereUniqueInputObjectSchema),
          z.lazy(() => LogoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema),
          z
            .lazy(() => LogoUpdateWithWhereUniqueWithoutTeamInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LogoUpdateManyWithWhereWithoutTeamInputObjectSchema),
          z
            .lazy(() => LogoUpdateManyWithWhereWithoutTeamInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LogoScalarWhereInputObjectSchema),
          z.lazy(() => LogoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LogoUncheckedUpdateManyWithoutTeamNestedInputObjectSchema = Schema;
