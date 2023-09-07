import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTagsInputObjectSchema } from './EventCreateWithoutTagsInput.schema';
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from './EventUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutTagsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutTagsInputObjectSchema = Schema;
