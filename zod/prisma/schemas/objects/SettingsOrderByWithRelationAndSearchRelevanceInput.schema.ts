import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { SettingsOrderByRelevanceInputObjectSchema } from './SettingsOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      darkmode: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      user: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => SettingsOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const SettingsOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
