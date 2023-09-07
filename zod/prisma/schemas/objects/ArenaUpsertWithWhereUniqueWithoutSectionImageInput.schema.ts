import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutSectionImageInputObjectSchema } from './ArenaUpdateWithoutSectionImageInput.schema';
import { ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedUpdateWithoutSectionImageInput.schema';
import { ArenaCreateWithoutSectionImageInputObjectSchema } from './ArenaCreateWithoutSectionImageInput.schema';
import { ArenaUncheckedCreateWithoutSectionImageInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithWhereUniqueWithoutSectionImageInput> =
  z
    .object({
      where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ArenaUpdateWithoutSectionImageInputObjectSchema),
        z.lazy(() => ArenaUncheckedUpdateWithoutSectionImageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ArenaCreateWithoutSectionImageInputObjectSchema),
        z.lazy(() => ArenaUncheckedCreateWithoutSectionImageInputObjectSchema),
      ]),
    })
    .strict();

export const ArenaUpsertWithWhereUniqueWithoutSectionImageInputObjectSchema =
  Schema;
