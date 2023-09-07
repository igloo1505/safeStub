import { z } from 'zod';
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketsNestedInput.schema';
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from './ArenaSectionUpdateOneRequiredWithoutTicketNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithoutTicketGroupInput> = z
  .object({
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    arenaSection: z
      .lazy(
        () => ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketUpdateWithoutTicketGroupInputObjectSchema = Schema;
