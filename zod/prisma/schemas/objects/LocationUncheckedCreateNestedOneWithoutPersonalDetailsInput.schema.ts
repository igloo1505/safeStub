import { z } from 'zod';
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from './LocationCreateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateWithoutPersonalDetailsInput.schema';
import { LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema } from './LocationCreateOrConnectWithoutPersonalDetailsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateNestedOneWithoutPersonalDetailsInput> =
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
      connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const LocationUncheckedCreateNestedOneWithoutPersonalDetailsInputObjectSchema =
  Schema;
