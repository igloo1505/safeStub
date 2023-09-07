import { z } from 'zod';
import { LegalNameOrderByRelevanceFieldEnumSchema } from '../enums/LegalNameOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => LegalNameOrderByRelevanceFieldEnumSchema),
      z.lazy(() => LegalNameOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const LegalNameOrderByRelevanceInputObjectSchema = Schema;
