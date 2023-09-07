import { z } from 'zod';
import { EventOrderByRelevanceFieldEnumSchema } from '../enums/EventOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => EventOrderByRelevanceFieldEnumSchema),
      z.lazy(() => EventOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const EventOrderByRelevanceInputObjectSchema = Schema;
