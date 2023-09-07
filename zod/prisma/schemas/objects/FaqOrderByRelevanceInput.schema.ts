import { z } from 'zod';
import { FaqOrderByRelevanceFieldEnumSchema } from '../enums/FaqOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaqOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => FaqOrderByRelevanceFieldEnumSchema),
      z.lazy(() => FaqOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const FaqOrderByRelevanceInputObjectSchema = Schema;
