import { z } from 'zod';
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from './EventCreateNestedManyWithoutArenaInput.schema';
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from './LocationCreateNestedOneWithoutArenaInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutArenaInput.schema';
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateWithoutSectionImageInput> = z
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
    homeTeams: z
      .lazy(() => TeamCreateNestedManyWithoutHomeArenaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaCreateWithoutSectionImageInputObjectSchema = Schema;
