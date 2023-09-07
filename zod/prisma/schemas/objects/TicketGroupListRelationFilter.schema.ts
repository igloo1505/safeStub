import { z } from 'zod';
import { TicketGroupWhereInputObjectSchema } from './TicketGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupListRelationFilter> = z
  .object({
    every: z.lazy(() => TicketGroupWhereInputObjectSchema).optional(),
    some: z.lazy(() => TicketGroupWhereInputObjectSchema).optional(),
    none: z.lazy(() => TicketGroupWhereInputObjectSchema).optional(),
  })
  .strict();

export const TicketGroupListRelationFilterObjectSchema = Schema;
