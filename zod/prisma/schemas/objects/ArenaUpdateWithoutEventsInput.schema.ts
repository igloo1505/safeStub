import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutArenaNestedInput.schema';
import { ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from './ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInput.schema';
import { ImageUpdateOneWithoutArenaNestedInputObjectSchema } from './ImageUpdateOneWithoutArenaNestedInput.schema';
import { TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema } from './TeamUpdateManyWithoutHomeArenaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithoutEventsInput> = z
  .object({
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
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema)
      .optional(),
    amenities: z
      .lazy(
        () =>
          ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema,
      )
      .optional(),
    sectionImage: z
      .lazy(() => ImageUpdateOneWithoutArenaNestedInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(() => TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaUpdateWithoutEventsInputObjectSchema = Schema;
