import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutAmenitiesInputObjectSchema } from './ArenaCreateWithoutAmenitiesInput.schema';
import { ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema } from './ArenaUncheckedCreateWithoutAmenitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutAmenitiesInputObjectSchema = Schema;
