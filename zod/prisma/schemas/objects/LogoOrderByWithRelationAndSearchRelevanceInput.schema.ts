import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './TeamOrderByWithRelationAndSearchRelevanceInput.schema';
import { LogoOrderByRelevanceInputObjectSchema } from './LogoOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      path: z.lazy(() => SortOrderSchema).optional(),
      width: z.lazy(() => SortOrderSchema).optional(),
      height: z.lazy(() => SortOrderSchema).optional(),
      rel: z.lazy(() => SortOrderSchema).optional(),
      url: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      teamId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      Team: z
        .lazy(() => TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      _relevance: z
        .lazy(() => LogoOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const LogoOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
