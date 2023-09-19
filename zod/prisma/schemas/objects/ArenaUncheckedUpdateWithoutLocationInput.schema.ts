import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutArenaNestedInput.schema';
import { TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema } from './TeamUncheckedUpdateManyWithoutHomeArenaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedUpdateWithoutLocationInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    uniqueKey: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    arenaAmenitiesId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sectionImageId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    events: z
      .lazy(() => EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(
        () => TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaUncheckedUpdateWithoutLocationInputObjectSchema = Schema;
