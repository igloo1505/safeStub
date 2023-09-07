import { z } from 'zod';
import { TeamUncheckedCreateNestedManyWithoutColorsInputObjectSchema } from './TeamUncheckedCreateNestedManyWithoutColorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    primary: z.string(),
    secondary: z.string().optional().nullable(),
    Team: z
      .lazy(() => TeamUncheckedCreateNestedManyWithoutColorsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ColorsUncheckedCreateInputObjectSchema = Schema;
