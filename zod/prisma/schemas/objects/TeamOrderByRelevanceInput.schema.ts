import { z } from 'zod';
import { TeamOrderByRelevanceFieldEnumSchema } from '../enums/TeamOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => TeamOrderByRelevanceFieldEnumSchema),
      z.lazy(() => TeamOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export const TeamOrderByRelevanceInputObjectSchema = Schema;
