import { z } from 'zod';
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from './LocationCreateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateWithoutPersonalDetailsInput.schema';
import { LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './LocationCreateOrConnectWithoutPersonalDetailsInput.schema';
import { LocationUpsertWithoutPersonalDetailsInputObjectSchema } from './LocationUpsertWithoutPersonalDetailsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutPersonalDetailsInputObjectSchema } from './LocationUpdateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedUpdateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () =>
              LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => LocationUpsertWithoutPersonalDetailsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithoutPersonalDetailsInputObjectSchema),
          z.lazy(
            () =>
              LocationUncheckedUpdateWithoutPersonalDetailsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema =
  Schema;
