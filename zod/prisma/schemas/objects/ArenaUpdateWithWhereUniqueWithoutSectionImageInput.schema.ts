import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutSectionImageInputObjectSchema } from './ArenaUpdateWithoutSectionImageInput.schema';
import { ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedUpdateWithoutSectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithWhereUniqueWithoutSectionImageInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaUpdateWithoutSectionImageInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpdateWithWhereUniqueWithoutSectionImageInputObjectSchema =
  Schema;
