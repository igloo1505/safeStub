import { z } from 'zod';
import { EventUpdateOneWithoutTicketsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketsNestedInput.schema';
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from './TicketGroupUpdateOneWithoutTicketsNestedInput.schema';
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from './ArenaSectionUpdateOneRequiredWithoutTicketNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateInput> = z
  .object({
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(() => TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema)
      .optional(),
    arenaSection: z
      .lazy(
        () => ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketUpdateInputObjectSchema = Schema;
