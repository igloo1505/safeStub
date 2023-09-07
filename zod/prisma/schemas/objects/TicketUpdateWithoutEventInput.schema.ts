import { z } from 'zod';
import { TicketGroupUpdateOneWithoutTicketsNestedInputObjectSchema } from './TicketGroupUpdateOneWithoutTicketsNestedInput.schema';
import { ArenaSectionUpdateOneRequiredWithoutTicketNestedInputObjectSchema } from './ArenaSectionUpdateOneRequiredWithoutTicketNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketUpdateWithoutEventInput> = z
  .object({
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

export const TicketUpdateWithoutEventInputObjectSchema = Schema;
