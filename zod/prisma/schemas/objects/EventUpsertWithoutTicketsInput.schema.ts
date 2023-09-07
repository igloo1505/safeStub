import { z } from 'zod';
import { EventUpdateWithoutTicketsInputObjectSchema } from './EventUpdateWithoutTicketsInput.schema';
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketsInput.schema';
import { EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithoutTicketsInput> = z
  .object({
    update: z.union([
      z.lazy(() => EventUpdateWithoutTicketsInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutTicketsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutTicketsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithoutTicketsInputObjectSchema = Schema;
