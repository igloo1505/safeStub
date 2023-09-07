import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TeamUpdateManyWithoutColorsNestedInputObjectSchema } from './TeamUpdateManyWithoutColorsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsUpdateInput> = z
  .object({
    primary: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    secondary: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Team: z
      .lazy(() => TeamUpdateManyWithoutColorsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ColorsUpdateInputObjectSchema = Schema;
