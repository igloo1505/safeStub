import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TicketGroupUpdateManyMutationInputObjectSchema = Schema;
