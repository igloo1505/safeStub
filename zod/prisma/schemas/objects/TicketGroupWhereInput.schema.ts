import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';
import { ArenaSectionRelationFilterObjectSchema } from './ArenaSectionRelationFilter.schema';
import { ArenaSectionWhereInputObjectSchema } from './ArenaSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketGroupWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketGroupWhereInputObjectSchema),
        z.lazy(() => TicketGroupWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketGroupWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketGroupWhereInputObjectSchema),
        z.lazy(() => TicketGroupWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    eventId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    arenaSectionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    arenaSection: z
      .union([
        z.lazy(() => ArenaSectionRelationFilterObjectSchema),
        z.lazy(() => ArenaSectionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketGroupWhereInputObjectSchema = Schema;
