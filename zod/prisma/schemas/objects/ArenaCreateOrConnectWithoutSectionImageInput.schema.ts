import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutSectionImageInputObjectSchema } from './ArenaCreateWithoutSectionImageInput.schema';
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutSectionImageInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutSectionImageInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutSectionImageInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutSectionImageInputObjectSchema = Schema;
