import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TicketGroupRelationFilterObjectSchema } from './TicketGroupRelationFilter.schema';
import { TicketGroupWhereInputObjectSchema } from './TicketGroupWhereInput.schema';

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
    section: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    row: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    seat: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
  })
  .strict();

export const TicketWhereInputObjectSchema = Schema;
