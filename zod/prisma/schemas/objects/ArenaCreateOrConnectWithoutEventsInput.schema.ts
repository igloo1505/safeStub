import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutEventsInputObjectSchema } from './ArenaCreateWithoutEventsInput.schema';
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from './ArenaUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutEventsInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutEventsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutEventsInputObjectSchema = Schema;
