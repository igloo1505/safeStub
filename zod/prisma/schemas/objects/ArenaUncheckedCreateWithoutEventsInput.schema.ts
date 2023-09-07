import { z } from 'zod';
import { ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema } from './ArenaSectionUncheckedCreateNestedManyWithoutArenaInput.schema';
import { TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutHomeArenaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUncheckedCreateWithoutEventsInput> = z
  .object({
    id: z.number().optional(),
    uniqueKey: z.string().optional().nullable(),
    name: z.string(),
    arenaAmenitiesId: z.number(),
    locationId: z.number(),
    sectionImageId: z.number().optional().nullable(),
    sections: z
      .lazy(
        () =>
          ArenaSectionUncheckedCreateNestedManyWithoutArenaInputObjectSchema,
      )
      .optional(),
    homeTeams: z
      .lazy(
        () => TeamUncheckedCreateNestedManyWithoutHomeArenaInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ArenaUncheckedCreateWithoutEventsInputObjectSchema = Schema;
