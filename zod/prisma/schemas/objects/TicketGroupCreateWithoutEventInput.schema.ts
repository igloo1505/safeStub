import { z } from 'zod';
import { TicketCreateNestedManyWithoutTicketGroupInputObjectSchema } from './TicketCreateNestedManyWithoutTicketGroupInput.schema';
import { ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema } from './ArenaSectionCreateNestedOneWithoutTicketGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupCreateWithoutEventInput> = z
  .object({
    tickets: z
      .lazy(() => TicketCreateNestedManyWithoutTicketGroupInputObjectSchema)
      .optional(),
    arenaSection: z.lazy(
      () => ArenaSectionCreateNestedOneWithoutTicketGroupInputObjectSchema,
    ),
  })
  .strict();

export const TicketGroupCreateWithoutEventInputObjectSchema = Schema;
