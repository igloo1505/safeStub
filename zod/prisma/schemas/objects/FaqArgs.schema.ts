import { z } from 'zod';
import { FaqSelectObjectSchema } from './FaqSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqArgs> = z
  .object({
    select: z.lazy(() => FaqSelectObjectSchema).optional(),
  })
  .strict();

export const FaqArgsObjectSchema = Schema;
