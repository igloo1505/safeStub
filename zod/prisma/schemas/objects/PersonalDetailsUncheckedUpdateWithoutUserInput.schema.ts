import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LegalNameUncheckedUpdateOneWithoutPersonalDetailsNestedInput.schema';
import { LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema } from './LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
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
      location: z
        .lazy(
          () =>
            LocationUncheckedUpdateOneWithoutPersonalDetailsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsUncheckedUpdateWithoutUserInputObjectSchema =
  Schema;
