import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    darkmode: z.boolean().optional(),
  })
  .strict();

export const SettingsUncheckedCreateWithoutUserInputObjectSchema = Schema;
