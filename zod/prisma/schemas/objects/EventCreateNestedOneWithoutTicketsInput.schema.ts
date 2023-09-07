import { z } from 'zod';
import { EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';
import { EventCreateOrConnectWithoutTicketsInputObjectSchema } from './EventCreateOrConnectWithoutTicketsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedOneWithoutTicketsInput> = z
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
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EventCreateNestedOneWithoutTicketsInputObjectSchema = Schema;
