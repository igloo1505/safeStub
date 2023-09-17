import { z } from 'zod';
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketCreateNestedManyWithoutArenaSectionInput.schema';
import { TicketGroupCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketGroupCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateWithoutArenaInput> = z
  .object({
    name: z.string(),
    section: z.number(),
    row: z.number(),
    Ticket: z
      .lazy(() => TicketCreateNestedManyWithoutArenaSectionInputObjectSchema)
      .optional(),
    TicketGroup: z
      .lazy(
        () => TicketGroupCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionCreateWithoutArenaInputObjectSchema = Schema;
