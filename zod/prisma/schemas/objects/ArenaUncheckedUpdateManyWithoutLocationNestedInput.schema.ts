import { z } from 'zod';
import { ArenaCreateWithoutLocationInputObjectSchema } from './ArenaCreateWithoutLocationInput.schema';
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from './ArenaUncheckedCreateWithoutLocationInput.schema';
import { ArenaCreateOrConnectWithoutLocationInputObjectSchema } from './ArenaCreateOrConnectWithoutLocationInput.schema';
import { ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './ArenaUpsertWithWhereUniqueWithoutLocationInput.schema';
import { ArenaCreateManyLocationInputEnvelopeObjectSchema } from './ArenaCreateManyLocationInputEnvelope.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './ArenaUpdateWithWhereUniqueWithoutLocationInput.schema';
import { ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema } from './ArenaUpdateManyWithWhereWithoutLocationInput.schema';
import { ArenaScalarWhereInputObjectSchema } from './ArenaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedUpdateManyWithoutLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema),
          z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema).array(),
          z.lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema),
          z
            .lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ArenaCreateOrConnectWithoutLocationInputObjectSchema),
          z
            .lazy(() => ArenaCreateOrConnectWithoutLocationInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ArenaCreateManyLocationInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArenaWhereUniqueInputObjectSchema),
          z.lazy(() => ArenaWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema,
          ),
          z
            .lazy(
              () => ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArenaScalarWhereInputObjectSchema),
          z.lazy(() => ArenaScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArenaUncheckedUpdateManyWithoutLocationNestedInputObjectSchema =
  Schema;
