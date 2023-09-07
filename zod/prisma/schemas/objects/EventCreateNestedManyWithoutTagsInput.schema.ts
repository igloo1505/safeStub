import { z } from 'zod';
import { EventCreateWithoutTagsInputObjectSchema } from './EventCreateWithoutTagsInput.schema';
import { EventUncheckedCreateWithoutTagsInputObjectSchema } from './EventUncheckedCreateWithoutTagsInput.schema';
import { EventCreateOrConnectWithoutTagsInputObjectSchema } from './EventCreateOrConnectWithoutTagsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedManyWithoutTagsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutTagsInputObjectSchema),
        z.lazy(() => EventCreateWithoutTagsInputObjectSchema).array(),
        z.lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EventCreateOrConnectWithoutTagsInputObjectSchema),
        z.lazy(() => EventCreateOrConnectWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventWhereUniqueInputObjectSchema),
        z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const EventCreateNestedManyWithoutTagsInputObjectSchema = Schema;
