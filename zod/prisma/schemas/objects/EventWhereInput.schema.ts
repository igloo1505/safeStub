import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumCATEGORYFilterObjectSchema } from './EnumCATEGORYFilter.schema';
import { CATEGORYSchema } from '../enums/CATEGORY.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ArenaRelationFilterObjectSchema } from './ArenaRelationFilter.schema';
import { ArenaWhereInputObjectSchema } from './ArenaWhereInput.schema';
import { TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';
import { TicketGroupListRelationFilterObjectSchema } from './TicketGroupListRelationFilter.schema';
import { ArenaAmenitiesRelationFilterObjectSchema } from './ArenaAmenitiesRelationFilter.schema';
import { ArenaAmenitiesWhereInputObjectSchema } from './ArenaAmenitiesWhereInput.schema';
import { TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema';
import { TeamListRelationFilterObjectSchema } from './TeamListRelationFilter.schema';
import { ExternalTicketDataListRelationFilterObjectSchema } from './ExternalTicketDataListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventWhereInputObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventWhereInputObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    category: z
      .union([
        z.lazy(() => EnumCATEGORYFilterObjectSchema),
        z.lazy(() => CATEGORYSchema),
      ])
      .optional(),
    arenaId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    amenitiesId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    arena: z
      .union([
        z.lazy(() => ArenaRelationFilterObjectSchema),
        z.lazy(() => ArenaWhereInputObjectSchema),
      ])
      .optional(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    ticketGroups: z
      .lazy(() => TicketGroupListRelationFilterObjectSchema)
      .optional(),
    amenities: z
      .union([
        z.lazy(() => ArenaAmenitiesRelationFilterObjectSchema),
        z.lazy(() => ArenaAmenitiesWhereInputObjectSchema),
      ])
      .optional(),
    tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
    participants: z.lazy(() => TeamListRelationFilterObjectSchema).optional(),
    cxternalTicketSource: z
      .lazy(() => ExternalTicketDataListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EventWhereInputObjectSchema = Schema;
