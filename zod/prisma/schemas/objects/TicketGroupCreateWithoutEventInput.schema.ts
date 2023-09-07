import { z } from 'zod';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutEventInput> = z
  .object({
    seatedTogether: z.boolean(),
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketGroupCreateWithoutEventInputObjectSchema = Schema;
