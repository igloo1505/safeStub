import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseHistoryUpdateManyMutationInput> = z
  .object({})
  .strict();

export const PurchaseHistoryUpdateManyMutationInputObjectSchema = Schema;
