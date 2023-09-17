import { z } from 'zod';
import { TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUncheckedCreateWithoutTicketInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      arenaId: z.number(),
      section: z.number(),
      row: z.number(),
      TicketGroup: z
        .lazy(
          () =>
            TicketGroupUncheckedCreateNestedManyWithoutArenaSectionInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ArenaSectionUncheckedCreateWithoutTicketInputObjectSchema = Schema;
