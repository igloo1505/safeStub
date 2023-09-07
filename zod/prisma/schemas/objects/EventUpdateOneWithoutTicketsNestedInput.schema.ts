import { z } from 'zod';
import { EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';
import { EventCreateOrConnectWithoutTicketsInputObjectSchema } from './EventCreateOrConnectWithoutTicketsInput.schema';
import { EventUpsertWithoutTicketsInputObjectSchema } from './EventUpsertWithoutTicketsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTicketsInputObjectSchema } from './EventUpdateWithoutTicketsInput.schema';
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateOneWithoutTicketsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutTicketsInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EventCreateOrConnectWithoutTicketsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => EventUpsertWithoutTicketsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => EventUpdateWithoutTicketsInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutTicketsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EventUpdateOneWithoutTicketsNestedInputObjectSchema = Schema;
