import { z } from 'zod';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema } from './NestedEnumNFLTeamNameWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumNFLTeamNameFilterObjectSchema } from './NestedEnumNFLTeamNameFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNFLTeamNameWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => NFLTeamNameSchema).optional(),
    in: z
      .union([
        z.lazy(() => NFLTeamNameSchema).array(),
        z.lazy(() => NFLTeamNameSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => NFLTeamNameSchema).array(),
        z.lazy(() => NFLTeamNameSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => NFLTeamNameSchema),
        z.lazy(() => NestedEnumNFLTeamNameWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumNFLTeamNameFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumNFLTeamNameFilterObjectSchema).optional(),
  })
  .strict();

export const EnumNFLTeamNameWithAggregatesFilterObjectSchema = Schema;
