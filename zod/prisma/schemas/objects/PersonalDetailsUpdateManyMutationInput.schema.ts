import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsUpdateManyMutationInput> = z
  .object({})
  .strict();

export const PersonalDetailsUpdateManyMutationInputObjectSchema = Schema;
