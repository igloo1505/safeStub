import { z } from 'zod';
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from './EventCreateNestedManyWithoutArenaInput.schema';
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from './LocationCreateNestedOneWithoutArenaInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutArenaInput.schema';
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from './ImageCreateNestedOneWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateWithoutHomeTeamsInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    amenities: z.lazy(
      () => ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    sectionImage: z
      .lazy(() => ImageCreateNestedOneWithoutArenaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaCreateWithoutHomeTeamsInputObjectSchema = Schema;
