import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutArenaInputObjectSchema } from './LocationCreateWithoutArenaInput.schema';
import { LocationUncheckedCreateWithoutArenaInputObjectSchema } from './LocationUncheckedCreateWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutArenaInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutArenaInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutArenaInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutArenaInputObjectSchema = Schema;
