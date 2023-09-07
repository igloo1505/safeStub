import { z } from 'zod';
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from './EventCreateNestedManyWithoutArenaInput.schema';
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from './LocationCreateNestedOneWithoutArenaInput.schema';
import { ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema } from './ArenaSectionCreateNestedManyWithoutArenaInput.schema';
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from './ArenaAmenitiesCreateNestedOneWithoutArenaInput.schema';
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from './ImageCreateNestedOneWithoutArenaInput.schema';
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    sections: z
      .lazy(() => ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema)
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

export const ArenaCreateInputObjectSchema = Schema;
