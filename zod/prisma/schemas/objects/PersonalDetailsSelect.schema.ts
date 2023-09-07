import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { LegalNameArgsObjectSchema } from './LegalNameArgs.schema';
import { LocationArgsObjectSchema } from './LocationArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsSelect> = z
  .object({
    id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    name: z
      .union([z.boolean(), z.lazy(() => LegalNameArgsObjectSchema)])
      .optional(),
    location: z
      .union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const PersonalDetailsSelectObjectSchema = Schema;
