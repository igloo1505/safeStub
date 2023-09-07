import { z } from 'zod';
import { ArenaSectionOrderByRelevanceFieldEnumSchema } from '../enums/ArenaSectionOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => ArenaSectionOrderByRelevanceFieldEnumSchema),
      z.lazy(() => ArenaSectionOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const ArenaSectionOrderByRelevanceInputObjectSchema = Schema;
