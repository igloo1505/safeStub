import { z } from 'zod';
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from './ArenaCreateNestedOneWithoutSectionsInput.schema';
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketCreateNestedManyWithoutArenaSectionInput.schema';
import { TicketGroupCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketGroupCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateInput> = z
  .object({
    name: z.string(),
    section: z.number(),
    row: z.number(),
    Arena: z.lazy(() => ArenaCreateNestedOneWithoutSectionsInputObjectSchema),
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

export const ArenaSectionCreateInputObjectSchema = Schema;
