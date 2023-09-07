import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUncheckedCreateWithoutArenaInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    Ticket: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema = Schema;
