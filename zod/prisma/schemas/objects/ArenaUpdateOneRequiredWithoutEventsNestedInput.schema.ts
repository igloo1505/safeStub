import { z } from 'zod';
import { ArenaCreateWithoutEventsInputObjectSchema } from './ArenaCreateWithoutEventsInput.schema';
import { ArenaUncheckedCreateWithoutEventsInputObjectSchema } from './ArenaUncheckedCreateWithoutEventsInput.schema';
import { ArenaCreateOrConnectWithoutEventsInputObjectSchema } from './ArenaCreateOrConnectWithoutEventsInput.schema';
import { ArenaUpsertWithoutEventsInputObjectSchema } from './ArenaUpsertWithoutEventsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutEventsInputObjectSchema } from './ArenaUpdateWithoutEventsInput.schema';
import { ArenaUncheckedUpdateWithoutEventsInputObjectSchema } from './ArenaUncheckedUpdateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateOneRequiredWithoutEventsNestedInput> =
  z
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
      upsert: z
        .lazy(() => ArenaUpsertWithoutEventsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArenaUpdateWithoutEventsInputObjectSchema),
          z.lazy(() => ArenaUncheckedUpdateWithoutEventsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArenaUpdateOneRequiredWithoutEventsNestedInputObjectSchema =
  Schema;
