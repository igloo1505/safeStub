import { z } from 'zod';
import { TransactionCreateManyBuyerInputObjectSchema } from './TransactionCreateManyBuyerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyBuyerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TransactionCreateManyBuyerInputObjectSchema),
      z.lazy(() => TransactionCreateManyBuyerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TransactionCreateManyBuyerInputEnvelopeObjectSchema = Schema;
