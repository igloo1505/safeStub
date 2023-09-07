import { z } from 'zod';
import { ArenaOrderByRelevanceFieldEnumSchema } from '../enums/ArenaOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => ArenaOrderByRelevanceFieldEnumSchema),
      z.lazy(() => ArenaOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const ArenaOrderByRelevanceInputObjectSchema = Schema;
