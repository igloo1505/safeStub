import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from './ArenaCreateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedCreateWithoutHomeTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutHomeTeamsInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutHomeTeamsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutHomeTeamsInputObjectSchema = Schema;
