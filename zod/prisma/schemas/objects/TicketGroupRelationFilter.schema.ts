import { z } from 'zod';
import { TicketGroupWhereInputObjectSchema } from './TicketGroupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupRelationFilter> = z
  .object({
    is: z
      .lazy(() => TicketGroupWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TicketGroupWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TicketGroupRelationFilterObjectSchema = Schema;
