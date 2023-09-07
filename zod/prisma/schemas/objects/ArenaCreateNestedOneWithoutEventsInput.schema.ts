import { z } from 'zod';
import { ArenaCreateWithoutEventsInputObjectSchema } from './ArenaCreateWithoutEventsInput.schema';
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from './ArenaUncheckedCreateWithoutEventsInput.schema';
import { ArenaCreateOrConnectWithoutEventsInputObjectSchema } from './ArenaCreateOrConnectWithoutEventsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateNestedOneWithoutEventsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArenaCreateWithoutEventsInputObjectSchema),
        z.lazy(() => ArenaUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArenaCreateOrConnectWithoutEventsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArenaCreateNestedOneWithoutEventsInputObjectSchema = Schema;
