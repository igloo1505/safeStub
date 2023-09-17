import { z } from 'zod';
import { EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema } from './EventUpdateOneWithoutTicketGroupsNestedInput.schema';
import { ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInputObjectSchema } from './ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutTicketsInput> = z
  .object({
    Event: z
      .lazy(() => EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema)
      .optional(),
    arenaSection: z
      .lazy(
        () =>
          ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUpdateWithoutTicketsInputObjectSchema = Schema;
