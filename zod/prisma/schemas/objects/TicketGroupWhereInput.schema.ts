import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';

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
    seatedTogether: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    Event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TicketGroupWhereInputObjectSchema = Schema;
