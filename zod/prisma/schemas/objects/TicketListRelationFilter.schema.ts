import { z } from 'zod';
import { TicketWhereInputObjectSchema } from './TicketWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketListRelationFilter> = z
  .object({
    every: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    some: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    none: z.lazy(() => TicketWhereInputObjectSchema).optional(),
  })
  .strict();

export const TicketListRelationFilterObjectSchema = Schema;
