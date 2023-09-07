import { z } from 'zod';
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateWithoutArenaInput> = z
  .object({
    name: z.string(),
    Ticket: z
      .lazy(() => TicketCreateNestedManyWithoutArenaSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionCreateWithoutArenaInputObjectSchema = Schema;
