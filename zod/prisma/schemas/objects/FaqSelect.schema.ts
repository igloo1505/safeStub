import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    subtitle: z.boolean().optional(),
    body: z.boolean().optional(),
    category: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    priority: z.boolean().optional(),
  })
  .strict();

export const FaqSelectObjectSchema = Schema;
