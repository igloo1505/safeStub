import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTagsInputObjectSchema } from './EventUpdateWithoutTagsInput.schema';
import { EventUncheckedUpdateWithoutTagsInputObjectSchema } from './EventUncheckedUpdateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EventUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
