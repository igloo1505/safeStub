import { z } from 'zod';
import { TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema } from './TicketGroupCreateNestedOneWithoutTicketsInput.schema';
import { ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema } from './ArenaSectionCreateNestedOneWithoutTicketInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketCreateWithoutEventInput> = z
  .object({
    TicketGroup: z
      .lazy(() => TicketGroupCreateNestedOneWithoutTicketsInputObjectSchema)
      .optional(),
    arenaSection: z.lazy(
      () => ArenaSectionCreateNestedOneWithoutTicketInputObjectSchema,
    ),
  })
  .strict();

export const TicketCreateWithoutEventInputObjectSchema = Schema;
