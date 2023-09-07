import { z } from 'zod';
import { ArenaUpdateWithoutEventsInputObjectSchema } from './ArenaUpdateWithoutEventsInput.schema';
import { ArenaUncheckedUpdateWithoutEventsInputObjectSchema } from './ArenaUncheckedUpdateWithoutEventsInput.schema';
import { ArenaCreateWithoutEventsInputObjectSchema } from './ArenaCreateWithoutEventsInput.schema';
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from './ArenaUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => ArenaUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutEventsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaUpsertWithoutEventsInputObjectSchema = Schema;
