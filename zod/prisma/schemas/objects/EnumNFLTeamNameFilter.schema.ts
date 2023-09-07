import { z } from 'zod';
import { NFLTeamNameSchema } from '../enums/NFLTeamName.schema';
import { NestedEnumNFLTeamNameFilterObjectSchema } from './NestedEnumNFLTeamNameFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumNFLTeamNameFilter> = z
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
        z.lazy(() => NestedEnumNFLTeamNameFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumNFLTeamNameFilterObjectSchema = Schema;
