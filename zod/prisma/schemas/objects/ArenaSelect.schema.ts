import { z } from 'zod';
import { EventFindManySchema } from '../findManyEvent.schema';
import { LocationArgsObjectSchema } from './LocationArgs.schema';
import { ArenaSectionFindManySchema } from '../findManyArenaSection.schema';
import { ArenaAmenitiesArgsObjectSchema } from './ArenaAmenitiesArgs.schema';
import { ImageArgsObjectSchema } from './ImageArgs.schema';
import { TeamFindManySchema } from '../findManyTeam.schema';
import { ArenaCountOutputTypeArgsObjectSchema } from './ArenaCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSelect> = z
  .object({
    id: z.boolean().optional(),
    uniqueKey: z.boolean().optional(),
    name: z.boolean().optional(),
    events: z
      .union([z.boolean(), z.lazy(() => EventFindManySchema)])
      .optional(),
    location: z
      .union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)])
      .optional(),
    sections: z
      .union([z.boolean(), z.lazy(() => ArenaSectionFindManySchema)])
      .optional(),
    amenities: z
      .union([z.boolean(), z.lazy(() => ArenaAmenitiesArgsObjectSchema)])
      .optional(),
    sectionImage: z
      .union([z.boolean(), z.lazy(() => ImageArgsObjectSchema)])
      .optional(),
    arenaAmenitiesId: z.boolean().optional(),
    locationId: z.boolean().optional(),
    sectionImageId: z.boolean().optional(),
    homeTeams: z
      .union([z.boolean(), z.lazy(() => TeamFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArenaCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ArenaSelectObjectSchema = Schema;
