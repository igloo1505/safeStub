import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutTicketsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutTicketsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutTicketsInputObjectSchema = Schema;
