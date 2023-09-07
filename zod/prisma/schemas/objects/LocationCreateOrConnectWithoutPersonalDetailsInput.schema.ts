import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutPersonalDetailsInputObjectSchema } from './LocationCreateWithoutPersonalDetailsInput.schema';
import { LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema } from './LocationUncheckedCreateWithoutPersonalDetailsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutPersonalDetailsInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => LocationCreateWithoutPersonalDetailsInputObjectSchema),
        z.lazy(
          () => LocationUncheckedCreateWithoutPersonalDetailsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const LocationCreateOrConnectWithoutPersonalDetailsInputObjectSchema =
  Schema;
