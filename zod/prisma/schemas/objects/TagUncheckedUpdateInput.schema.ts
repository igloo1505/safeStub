import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutTagsNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    value: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUncheckedUpdateManyWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
