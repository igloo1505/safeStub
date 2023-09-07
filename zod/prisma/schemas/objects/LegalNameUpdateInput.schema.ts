import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema } from './PersonalDetailsUpdateOneRequiredWithoutNameNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameUpdateInput> = z
  .object({
    first: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    middle: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    last: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    personalDetails: z
      .lazy(
        () =>
          PersonalDetailsUpdateOneRequiredWithoutNameNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LegalNameUpdateInputObjectSchema = Schema;
