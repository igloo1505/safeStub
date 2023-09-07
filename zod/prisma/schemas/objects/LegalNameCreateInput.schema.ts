import { z } from 'zod';
import { PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema } from './PersonalDetailsCreateNestedOneWithoutNameInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LegalNameCreateInput> = z
  .object({
    first: z.string(),
    middle: z.string().optional().nullable(),
    last: z.string(),
    personalDetails: z.lazy(
      () => PersonalDetailsCreateNestedOneWithoutNameInputObjectSchema,
    ),
  })
  .strict();

export const LegalNameCreateInputObjectSchema = Schema;
