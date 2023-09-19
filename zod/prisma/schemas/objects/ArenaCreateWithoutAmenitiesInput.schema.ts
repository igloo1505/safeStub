import { z } from 'zod';
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from './EventCreateNestedManyWithoutArenaInput.schema';
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from './LocationCreateNestedOneWithoutArenaInput.schema';
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from './ImageCreateNestedOneWithoutArenaInput.schema';
import { TeamCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateWithoutAmenitiesInput> = z
  .object({
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutArenaInputObjectSchema,
    ),
    sectionImage: z
      .lazy(() => ImageCreateNestedOneWithoutArenaInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(() => TeamCreateNestedManyWithoutHomeArenaInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArenaCreateWithoutAmenitiesInputObjectSchema = Schema;
