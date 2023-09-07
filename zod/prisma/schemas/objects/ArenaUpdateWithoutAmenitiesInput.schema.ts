import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutArenaNestedInputObjectSchema } from './EventUpdateManyWithoutArenaNestedInput.schema';
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutArenaNestedInput.schema';
import { ArenaSectionUpdateManyWithoutArenaNestedInputObjectSchema } from './ArenaSectionUpdateManyWithoutArenaNestedInput.schema';
import { ImageUpdateOneWithoutArenaNestedInputObjectSchema } from './ImageUpdateOneWithoutArenaNestedInput.schema';
import { TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema } from './TeamUpdateManyWithoutHomeArenaNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateWithoutAmenitiesInput> = z
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
    sectionImage: z
      .lazy(() => ImageUpdateOneWithoutArenaNestedInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(() => TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaUpdateWithoutAmenitiesInputObjectSchema = Schema;
