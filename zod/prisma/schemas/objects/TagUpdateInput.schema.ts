import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutTagsNestedInputObjectSchema } from './EventUpdateManyWithoutTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateInput> = z
  .object({
    value: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUpdateInputObjectSchema = Schema;
