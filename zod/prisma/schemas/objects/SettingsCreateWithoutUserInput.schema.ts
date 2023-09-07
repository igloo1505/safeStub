import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateWithoutUserInput> = z
  .object({
    darkmode: z.boolean().optional(),
  })
  .strict();

export const SettingsCreateWithoutUserInputObjectSchema = Schema;
