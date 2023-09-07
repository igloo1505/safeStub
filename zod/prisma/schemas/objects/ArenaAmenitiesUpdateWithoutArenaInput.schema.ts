import { z } from 'zod';
import { AMENITIYSchema } from '../enums/AMENITIY.schema';
import { EnumAMENITIYFieldUpdateOperationsInputObjectSchema } from './EnumAMENITIYFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PARKINGSchema } from '../enums/PARKING.schema';
import { EnumPARKINGFieldUpdateOperationsInputObjectSchema } from './EnumPARKINGFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutAmenitiesNestedInputObjectSchema } from './EventUpdateManyWithoutAmenitiesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaAmenitiesUpdateWithoutArenaInput> = z
  .object({
    indoor: z
      .union([
        z.lazy(() => AMENITIYSchema),
        z.lazy(() => EnumAMENITIYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    covered: z
      .union([
        z.lazy(() => AMENITIYSchema),
        z.lazy(() => EnumAMENITIYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    outdoor: z
      .union([
        z.lazy(() => AMENITIYSchema),
        z.lazy(() => EnumAMENITIYFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    food: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    alcohol: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    parking: z
      .union([
        z.lazy(() => PARKINGSchema),
        z.lazy(() => EnumPARKINGFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    shuttleAvailable: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Event: z
      .lazy(() => EventUpdateManyWithoutAmenitiesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaAmenitiesUpdateWithoutArenaInputObjectSchema = Schema;
