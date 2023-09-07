import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedUpdateWithoutLocationInput> =
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
      name: z
        .lazy(
          () =>
            LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedUpdateWithoutLocationInputObjectSchema =
  Schema;
