import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './LegalNameOrderByWithRelationAndSearchRelevanceInput.schema';
import { LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './LocationOrderByWithRelationAndSearchRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsOrderByWithRelationAndSearchRelevanceInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      user: z
        .lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema)
        .optional(),
      name: z
        .lazy(
          () => LegalNameOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
      location: z
        .lazy(
          () => LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema =
  Schema;
