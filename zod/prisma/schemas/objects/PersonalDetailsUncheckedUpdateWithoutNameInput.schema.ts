import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedUpdateWithoutNameInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      location: z
        .lazy(
          () =>
            LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedUpdateWithoutNameInputObjectSchema =
  Schema;
