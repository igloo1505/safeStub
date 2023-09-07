import { z } from 'zod';
import { LocationCreateWithoutArenaInputObjectSchema } from './LocationCreateWithoutArenaInput.schema';
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from './LocationUncheckedCreateWithoutArenaInput.schema';
import { LocationCreateOrConnectWithoutArenaInputObjectSchema } from './LocationCreateOrConnectWithoutArenaInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutArenaInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LocationCreateWithoutArenaInputObjectSchema),
        z.lazy(() => LocationUncheckedCreateWithoutArenaInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => LocationCreateOrConnectWithoutArenaInputObjectSchema)
      .optional(),
    connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LocationCreateNestedOneWithoutArenaInputObjectSchema = Schema;
