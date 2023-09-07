import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    arenaId: z.number(),
    Ticket: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionUncheckedCreateInputObjectSchema = Schema;
