import { z } from 'zod';
import { LogoOrderByRelevanceFieldEnumSchema } from '../enums/LogoOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => LogoOrderByRelevanceFieldEnumSchema),
      z.lazy(() => LogoOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const LogoOrderByRelevanceInputObjectSchema = Schema;
