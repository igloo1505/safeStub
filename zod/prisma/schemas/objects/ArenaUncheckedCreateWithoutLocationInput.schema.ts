import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutArenaInput.schema';
import { TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateWithoutLocationInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    sectionImageId: z.number().optional().nullable(),
    events: z
      .lazy(() => EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema)
      .optional(),
    homeTeams: z
      .lazy(
        () => TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaUncheckedCreateWithoutLocationInputObjectSchema = Schema;
