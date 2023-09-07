import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TicketGroupRelationFilterObjectSchema } from './TicketGroupRelationFilter.schema';
import { TicketGroupWhereInputObjectSchema } from './TicketGroupWhereInput.schema';
import { ArenaSectionRelationFilterObjectSchema } from './ArenaSectionRelationFilter.schema';
import { ArenaSectionWhereInputObjectSchema } from './ArenaSectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketWhereInputObjectSchema),
        z.lazy(() => TicketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketWhereInputObjectSchema),
        z.lazy(() => TicketWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    eventId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    ticketGroupId: z
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
    TicketGroup: z
      .union([
        z.lazy(() => TicketGroupRelationFilterObjectSchema),
        z.lazy(() => TicketGroupWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    arenaSection: z
      .union([
        z.lazy(() => ArenaSectionRelationFilterObjectSchema),
        z.lazy(() => ArenaSectionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TicketWhereInputObjectSchema = Schema;
