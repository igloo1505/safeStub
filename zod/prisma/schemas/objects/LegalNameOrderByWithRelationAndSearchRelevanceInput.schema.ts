import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './PersonalDetailsOrderByWithRelationAndSearchRelevanceInput.schema';
import { LegalNameOrderByRelevanceInputObjectSchema } from './LegalNameOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      first: z.lazy(() => SortOrderSchema).optional(),
      middle: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      last: z.lazy(() => SortOrderSchema).optional(),
      detailsId: z.lazy(() => SortOrderSchema).optional(),
      personalDetails: z
        .lazy(
          () =>
            PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      _relevance: z
        .lazy(() => LegalNameOrderByRelevanceInputObjectSchema)
        .optional(),
    })
    .strict();

export const LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
