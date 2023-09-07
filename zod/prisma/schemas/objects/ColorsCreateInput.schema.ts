import { z } from 'zod';
import { TeamCreateNestedManyWithoutColorsInputObjectSchema } from './TeamCreateNestedManyWithoutColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCreateInput> = z
  .object({
    primary: z.string(),
    secondary: z.string().optional().nullable(),
    Team: z
      .lazy(() => TeamCreateNestedManyWithoutColorsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ColorsCreateInputObjectSchema = Schema;
