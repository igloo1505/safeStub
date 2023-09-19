import { z } from 'zod';
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from './EventCreateNestedManyWithoutArenaInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutArenaInput.schema';
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from './ImageCreateNestedOneWithoutArenaInput.schema';
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateWithoutLocationInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
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

export const ArenaCreateWithoutLocationInputObjectSchema = Schema;
