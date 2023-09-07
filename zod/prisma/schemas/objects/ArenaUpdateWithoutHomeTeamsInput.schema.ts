import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutArenaNestedInputObjectSchema } from './EventUpdateManyWithoutArenaNestedInput.schema';
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutArenaNestedInput.schema';
import { ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema } from './ArenaSectionUpdateManyWithoutArenaNestedInput.schema';
import { ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from './ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInput.schema';
import { ImageUpdateOneWithoutArenaNestedInputObjectSchema } from './ImageUpdateOneWithoutArenaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithoutHomeTeamsInput> = z
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
    events: z
      .lazy(() => EventUpdateManyWithoutArenaNestedInputObjectSchema)
      .optional(),
    location: z
      .lazy(() => LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema)
      .optional(),
    sections: z
      .lazy(() => ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema)
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
  })
  .strict();

export const ArenaUpdateWithoutHomeTeamsInputObjectSchema = Schema;
