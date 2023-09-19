import { z } from 'zod';
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from './TicketGroupCreateNestedOneWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutEventInput> = z
  .object({
    section: z.string(),
    row: z.string(),
    seat: z.string(),
    TicketGroup: z
      .lazy(() => TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketCreateWithoutEventInputObjectSchema = Schema;
