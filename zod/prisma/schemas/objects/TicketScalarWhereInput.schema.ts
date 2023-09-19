import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TicketScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketScalarWhereInputObjectSchema),
        z.lazy(() => TicketScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketScalarWhereInputObjectSchema),
        z.lazy(() => TicketScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const TicketScalarWhereInputObjectSchema = Schema;
