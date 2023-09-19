import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutArenaInput.schema';
import { TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateWithoutSectionImageInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    locationId: z.number(),
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

export const ArenaUncheckedCreateWithoutSectionImageInputObjectSchema = Schema;
