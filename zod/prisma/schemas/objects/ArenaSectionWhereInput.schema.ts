import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ArenaRelationFilterObjectSchema } from './ArenaRelationFilter.schema';
import { ArenaWhereInputObjectSchema } from './ArenaWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaSectionWhereInputObjectSchema),
        z.lazy(() => ArenaSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaSectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaSectionWhereInputObjectSchema),
        z.lazy(() => ArenaSectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    arenaId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Arena: z
      .union([
        z.lazy(() => ArenaRelationFilterObjectSchema),
        z.lazy(() => ArenaWhereInputObjectSchema),
      ])
      .optional(),
    Ticket: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArenaSectionWhereInputObjectSchema = Schema;
