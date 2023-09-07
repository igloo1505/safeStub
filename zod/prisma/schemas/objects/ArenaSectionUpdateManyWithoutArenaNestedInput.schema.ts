import { z } from 'zod';
import { ArenaSectionCreateWithoutArenaInputObjectSchema } from './ArenaSectionCreateWithoutArenaInput.schema';
import { ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateWithoutArenaInput.schema';
import { ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema } from './ArenaSectionCreateOrConnectWithoutArenaInput.schema';
import { ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema } from './ArenaSectionUpsertWithWhereUniqueWithoutArenaInput.schema';
import { ArenaSectionCreateManyArenaInputEnvelopeObjectSchema } from './ArenaSectionCreateManyArenaInputEnvelope.schema';
import { ArenaSectionWhereUniqueInputObjectSchema } from './ArenaSectionWhereUniqueInput.schema';
import { ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema } from './ArenaSectionUpdateWithWhereUniqueWithoutArenaInput.schema';
import { ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema } from './ArenaSectionUpdateManyWithWhereWithoutArenaInput.schema';
import { ArenaSectionScalarWhereInputObjectSchema } from './ArenaSectionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateManyWithoutArenaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema),
          z.lazy(() => ArenaSectionCreateWithoutArenaInputObjectSchema).array(),
          z.lazy(
            () => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaSectionCreateOrConnectWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaSectionUpsertWithWhereUniqueWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaSectionCreateManyArenaInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaSectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaSectionUpdateWithWhereUniqueWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArenaSectionScalarWhereInputObjectSchema),
          z.lazy(() => ArenaSectionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema = Schema;
