import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { ArenaSectionListRelationFilterObjectSchema } from './ArenaSectionListRelationFilter.schema';
import { ArenaAmenitiesRelationFilterObjectSchema } from './ArenaAmenitiesRelationFilter.schema';
import { ArenaAmenitiesWhereInputObjectSchema } from './ArenaAmenitiesWhereInput.schema';
import { ImageRelationFilterObjectSchema } from './ImageRelationFilter.schema';
import { ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { TeamListRelationFilterObjectSchema } from './TeamListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArenaWhereInputObjectSchema),
        z.lazy(() => ArenaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArenaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArenaWhereInputObjectSchema),
        z.lazy(() => ArenaWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    uniqueKey: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    arenaAmenitiesId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    locationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    sectionImageId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
    location: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional(),
    sections: z
      .lazy(() => ArenaSectionListRelationFilterObjectSchema)
      .optional(),
    amenities: z
      .union([
        z.lazy(() => ArenaAmenitiesRelationFilterObjectSchema),
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema),
      ])
      .optional(),
    sectionImage: z
      .union([
        z.lazy(() => ImageRelationFilterObjectSchema),
        z.lazy(() => ImageWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    homeTeams: z.lazy(() => TeamListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ArenaWhereInputObjectSchema = Schema;
