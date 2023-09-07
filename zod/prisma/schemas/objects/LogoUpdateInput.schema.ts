import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { LogoUpdaterelInputObjectSchema } from './LogoUpdaterelInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TeamUpdateOneWithoutLogosNestedInputObjectSchema } from './TeamUpdateOneWithoutLogosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoUpdateInput> = z
  .object({
    path: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    width: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    height: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    rel: z
      .union([z.lazy(() => LogoUpdaterelInputObjectSchema), z.string().array()])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Team: z
      .lazy(() => TeamUpdateOneWithoutLogosNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LogoUpdateInputObjectSchema = Schema;
