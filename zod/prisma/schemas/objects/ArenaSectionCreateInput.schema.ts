import { z } from 'zod';
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from './ArenaCreateNestedOneWithoutSectionsInput.schema';
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateInput> = z
  .object({
    name: z.string(),
    Arena: z.lazy(() => ArenaCreateNestedOneWithoutSectionsInputObjectSchema),
    Ticket: z
      .lazy(() => TicketCreateNestedManyWithoutArenaSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaSectionCreateInputObjectSchema = Schema;
