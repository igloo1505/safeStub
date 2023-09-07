import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutArenaInput.schema';
import { ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateNestedManyWithoutArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateWithoutHomeTeamsInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    locationId: z.number(),
    sectionImageId: z.number().optional().nullable(),
    events: z
      .lazy(() => EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
    sections: z
      .lazy(
        () =>
          ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaUncheckedCreateWithoutHomeTeamsInputObjectSchema = Schema;
