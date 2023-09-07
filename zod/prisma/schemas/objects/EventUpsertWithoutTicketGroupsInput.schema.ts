import { z } from 'zod';
import { EventUpdateWithoutTicketGroupsInputObjectSchema } from './EventUpdateWithoutTicketGroupsInput.schema';
import { EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketGroupsInput.schema';
import { EventCreateWithoutTicketGroupsInputObjectSchema } from './EventCreateWithoutTicketGroupsInput.schema';
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedCreateWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithoutTicketGroupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => EventUpdateWithoutTicketGroupsInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutTicketGroupsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTicketGroupsInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithoutTicketGroupsInputObjectSchema = Schema;
