import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutColorsInputObjectSchema } from './TeamUpdateWithoutColorsInput.schema';
import { TeamUncheckedUpdateWithoutColorsInputObjectSchema } from './TeamUncheckedUpdateWithoutColorsInput.schema';
import { TeamCreateWithoutColorsInputObjectSchema } from './TeamCreateWithoutColorsInput.schema';
import { TeamUncheckedCreateWithoutColorsInputObjectSchema } from './TeamUncheckedCreateWithoutColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutColorsInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TeamUpdateWithoutColorsInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateWithoutColorsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TeamCreateWithoutColorsInputObjectSchema),
      z.lazy(() => TeamUncheckedCreateWithoutColorsInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpsertWithWhereUniqueWithoutColorsInputObjectSchema = Schema;
