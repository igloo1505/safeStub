import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TicketUpdateManyMutationInputObjectSchema = Schema;
