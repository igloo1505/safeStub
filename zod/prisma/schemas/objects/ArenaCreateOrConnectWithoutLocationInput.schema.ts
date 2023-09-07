import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutLocationInputObjectSchema } from './ArenaCreateWithoutLocationInput.schema';
import { ArenaUncheckedCreateWithoutLocationInputObjectSchema } from './ArenaUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutLocationInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutLocationInputObjectSchema = Schema;
