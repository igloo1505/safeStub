import { z } from 'zod';
import { EventCreateWithoutTicketGroupsInputObjectSchema } from './EventCreateWithoutTicketGroupsInput.schema';
import { EventUncheckedCreateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedCreateWithoutTicketGroupsInput.schema';
import { EventCreateOrConnectWithoutTicketGroupsInputObjectSchema } from './EventCreateOrConnectWithoutTicketGroupsInput.schema';
import { EventUpsertWithoutTicketGroupsInputObjectSchema } from './EventUpsertWithoutTicketGroupsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTicketGroupsInputObjectSchema } from './EventUpdateWithoutTicketGroupsInput.schema';
import { EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketGroupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateOneWithoutTicketGroupsNestedInput> = z
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
    upsert: z
      .lazy(() => EventUpsertWithoutTicketGroupsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => EventUpdateWithoutTicketGroupsInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutTicketGroupsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EventUpdateOneWithoutTicketGroupsNestedInputObjectSchema = Schema;
