import { z } from 'zod';
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from './ArenaCreateNestedOneWithoutSectionsInput.schema';
import { TicketGroupCreateNestedManyWithoutArenaSectionInputObjectSchema } from './TicketGroupCreateNestedManyWithoutArenaSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateWithoutTicketInput> = z
  .object({
    name: z.string(),
    section: z.number(),
    row: z.number(),
    Arena: z.lazy(() => ArenaCreateNestedOneWithoutSectionsInputObjectSchema),
    TicketGroup: z
      .lazy(
        () => TicketGroupCreateNestedManyWithoutArenaSectionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaSectionCreateWithoutTicketInputObjectSchema = Schema;
