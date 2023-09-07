import { z } from 'zod';
import { EventCreateWithoutTicketGroupsInputObjectSchema } from './EventCreateWithoutTicketGroupsInput.schema';
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedCreateWithoutTicketGroupsInput.schema';
import { EventCreateOrConnectWithoutTicketGroupsInputObjectSchema } from './EventCreateOrConnectWithoutTicketGroupsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedOneWithoutTicketGroupsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutTicketGroupsInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutTicketGroupsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EventCreateOrConnectWithoutTicketGroupsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EventCreateNestedOneWithoutTicketGroupsInputObjectSchema = Schema;
