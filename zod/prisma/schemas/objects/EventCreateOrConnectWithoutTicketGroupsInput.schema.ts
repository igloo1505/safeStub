import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTicketGroupsInputObjectSchema } from './EventCreateWithoutTicketGroupsInput.schema';
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedCreateWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutTicketGroupsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutTicketGroupsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTicketGroupsInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutTicketGroupsInputObjectSchema = Schema;
