import { z } from 'zod';
import { TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutArenaSectionInput.schema';
import { TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUncheckedCreateWithoutArenaInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    section: z.number(),
    row: z.number(),
    Ticket: z
      .lazy(
        () =>
          TicketUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
    TicketGroup: z
      .lazy(
        () =>
          TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionUncheckedCreateWithoutArenaInputObjectSchema = Schema;
