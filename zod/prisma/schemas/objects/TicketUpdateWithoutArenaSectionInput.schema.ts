import { z } from 'zod';
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketsNestedInput.schema';
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from './TicketGroupUpdateOneWithoutTicketsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithoutArenaSectionInput> = z
  .object({
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(() => TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TicketUpdateWithoutArenaSectionInputObjectSchema = Schema;
