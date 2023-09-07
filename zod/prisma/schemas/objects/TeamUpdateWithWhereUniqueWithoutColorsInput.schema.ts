import { z } from 'zod';
import { TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithoutColorsInputObjectSchema } from './TeamUpdateWithoutColorsInput.schema';
import { TeamUncheckedUpdateWithoutColorsInputObjectSchema } from './TeamUncheckedUpdateWithoutColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutColorsInput> = z
  .object({
    where: z.lazy(() => TeamWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TeamUpdateWithoutColorsInputObjectSchema),
      z.lazy(() => TeamUncheckedUpdateWithoutColorsInputObjectSchema),
    ]),
  })
  .strict();

export const TeamUpdateWithWhereUniqueWithoutColorsInputObjectSchema = Schema;
