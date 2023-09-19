import { z } from 'zod';
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from './LocationCreateNestedOneWithoutArenaInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutArenaInput.schema';
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from './ImageCreateNestedOneWithoutArenaInput.schema';
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateWithoutEventsInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    amenities: z.lazy(
      () => ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    sectionImage: z
      .lazy(() => ImageCreateNestedOneWithoutArenaInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(() => TeamCreateNestedManyWithoutHomeArenaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaCreateWithoutEventsInputObjectSchema = Schema;
