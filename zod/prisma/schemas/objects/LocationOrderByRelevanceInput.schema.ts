import { z } from 'zod';
import { LocationOrderByRelevanceFieldEnumSchema } from '../enums/LocationOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => LocationOrderByRelevanceFieldEnumSchema),
      z.lazy(() => LocationOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const LocationOrderByRelevanceInputObjectSchema = Schema;
