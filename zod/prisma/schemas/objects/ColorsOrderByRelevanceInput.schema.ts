import { z } from 'zod';
import { ColorsOrderByRelevanceFieldEnumSchema } from '../enums/ColorsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => ColorsOrderByRelevanceFieldEnumSchema),
      z.lazy(() => ColorsOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const ColorsOrderByRelevanceInputObjectSchema = Schema;
