import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    confirmationId: z.string().optional(),
  })
  .strict();

export const TicketGroupWhereUniqueInputObjectSchema = Schema;
