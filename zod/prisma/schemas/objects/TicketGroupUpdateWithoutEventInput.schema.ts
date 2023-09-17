import { z } from 'zod';
import { TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema } from './TicketUpdateManyWithoutTicketGroupNestedInput.schema';
import { ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInputObjectSchema } from './ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupUpdateWithoutEventInput> = z
  .object({
    tickets: z
      .lazy(() => TicketUpdateManyWithoutTicketGroupNestedInputObjectSchema)
      .optional(),
    arenaSection: z
      .lazy(
        () =>
          ArenaSectionUpdateOneRequiredWithoutTicketGroupNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TicketGroupUpdateWithoutEventInputObjectSchema = Schema;
