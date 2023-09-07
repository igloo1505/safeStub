import { z } from 'zod';
import { TeamCreateWithoutHomeArenaInputObjectSchema } from './TeamCreateWithoutHomeArenaInput.schema';
import { TeamUncheckedCreateWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateWithoutHomeArenaInput.schema';
import { TeamCreateOrConnectWithoutHomeArenaInputObjectSchema } from './TeamCreateOrConnectWithoutHomeArenaInput.schema';
import { TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema } from './TeamUpsertWithWhereUniqueWithoutHomeArenaInput.schema';
import { TeamCreateManyHomeArenaInputEnvelopeObjectSchema } from './TeamCreateManyHomeArenaInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema } from './TeamUpdateWithWhereUniqueWithoutHomeArenaInput.schema';
import { TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema } from './TeamUpdateManyWithWhereWithoutHomeArenaInput.schema';
import { TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutHomeArenaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema),
          z.lazy(() => TeamCreateWithoutHomeArenaInputObjectSchema).array(),
          z.lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema),
          z
            .lazy(() => TeamUncheckedCreateWithoutHomeArenaInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TeamCreateOrConnectWithoutHomeArenaInputObjectSchema),
          z
            .lazy(() => TeamCreateOrConnectWithoutHomeArenaInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => TeamUpsertWithWhereUniqueWithoutHomeArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TeamCreateManyHomeArenaInputEnvelopeObjectSchema)
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
          z.lazy(
            () => TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => TeamUpdateWithWhereUniqueWithoutHomeArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => TeamUpdateManyWithWhereWithoutHomeArenaInputObjectSchema,
            )
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

export const TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema =
  Schema;
