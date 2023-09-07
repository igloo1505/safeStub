import { z } from 'zod';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSettingsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSettingsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsUpdateInput> = z
  .object({
    darkmode: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSettingsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SettingsUpdateInputObjectSchema = Schema;
