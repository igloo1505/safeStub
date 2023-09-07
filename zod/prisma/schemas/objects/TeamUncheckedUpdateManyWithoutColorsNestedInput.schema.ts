import { z } from 'zod';
import { TeamCreateWithoutColorsInputObjectSchema } from './TeamCreateWithoutColorsInput.schema';
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from './TeamUncheckedCreateWithoutColorsInput.schema';
import { TeamCreateOrConnectWithoutColorsInputObjectSchema } from './TeamCreateOrConnectWithoutColorsInput.schema';
import { TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema } from './TeamUpsertWithWhereUniqueWithoutColorsInput.schema';
import { TeamCreateManyColorsInputEnvelopeObjectSchema } from './TeamCreateManyColorsInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema } from './TeamUpdateWithWhereUniqueWithoutColorsInput.schema';
import { TeamUpdateManyWithWhereWithoutColorsInputObjectSchema } from './TeamUpdateManyWithWhereWithoutColorsInput.schema';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutColorsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamCreateWithoutColorsInputObjectSchema),
          z.lazy(() => TeamCreateWithoutColorsInputObjectSchema).array(),
          z.lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema),
          z
            .lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TeamCreateOrConnectWithoutColorsInputObjectSchema),
          z
            .lazy(() => TeamCreateOrConnectWithoutColorsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema),
          z
            .lazy(() => TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TeamCreateManyColorsInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TeamWhereUniqueInputObjectSchema),
          z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TeamWhereUniqueInputObjectSchema),
          z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TeamWhereUniqueInputObjectSchema),
          z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TeamWhereUniqueInputObjectSchema),
          z.lazy(() => TeamWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema),
          z
            .lazy(() => TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TeamUpdateManyWithWhereWithoutColorsInputObjectSchema),
          z
            .lazy(() => TeamUpdateManyWithWhereWithoutColorsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TeamScalarWhereInputObjectSchema),
          z.lazy(() => TeamScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamUncheckedUpdateManyWithoutColorsNestedInputObjectSchema =
  Schema;
