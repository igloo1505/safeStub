import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

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
    confirmationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sellerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    buyerId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    seller: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    buyer: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TicketGroupWhereInputObjectSchema = Schema;
