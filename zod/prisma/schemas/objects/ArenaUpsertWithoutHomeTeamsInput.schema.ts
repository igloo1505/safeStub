import { z } from 'zod';
import { ArenaUpdateWithoutHomeTeamsInputObjectSchema } from './ArenaUpdateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedUpdateWithoutHomeTeamsInput.schema';
import { ArenaCreateWithoutHomeTeamsInputObjectSchema } from './ArenaCreateWithoutHomeTeamsInput.schema';
import { ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema } from './ArenaUncheckedCreateWithoutHomeTeamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithoutHomeTeamsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaUpdateWithoutHomeTeamsInputObjectSchema),
      z.lazy(() => ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutHomeTeamsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaUpsertWithoutHomeTeamsInputObjectSchema = Schema;
