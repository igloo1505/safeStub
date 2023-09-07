import { z } from 'zod';
import { TransactionCreateManySellerInputObjectSchema } from './TransactionCreateManySellerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManySellerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TransactionCreateManySellerInputObjectSchema),
      z.lazy(() => TransactionCreateManySellerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TransactionCreateManySellerInputEnvelopeObjectSchema = Schema;
