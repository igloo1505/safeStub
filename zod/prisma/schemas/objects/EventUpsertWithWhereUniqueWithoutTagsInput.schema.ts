import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutTagsInputObjectSchema } from './EventUpdateWithoutTagsInput.schema';
import { EventUncheckedUpdateWithoutTagsInputObjectSchema } from './EventUncheckedUpdateWithoutTagsInput.schema';
import { EventCreateWithoutTagsInputObjectSchema } from './EventCreateWithoutTagsInput.schema';
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from './EventUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EventUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutTagsInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
