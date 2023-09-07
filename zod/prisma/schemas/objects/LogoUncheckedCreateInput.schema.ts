import { z } from 'zod';
import { LogoCreaterelInputObjectSchema } from './LogoCreaterelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    path: z.string(),
    width: z.number(),
    height: z.number(),
    rel: z
      .union([z.lazy(() => LogoCreaterelInputObjectSchema), z.string().array()])
      .optional(),
    url: z.string().optional().nullable(),
    teamId: z.number().optional().nullable(),
  })
  .strict();

export const LogoUncheckedCreateInputObjectSchema = Schema;
