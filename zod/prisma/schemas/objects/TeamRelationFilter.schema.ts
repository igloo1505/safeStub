import { z } from 'zod';
import { TeamWhereInputObjectSchema } from './TeamWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamRelationFilter> = z
  .object({
    is: z
      .lazy(() => TeamWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TeamWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TeamRelationFilterObjectSchema = Schema;
