import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { LegalNameArgsObjectSchema } from './LegalNameArgs.schema';
import { LocationArgsObjectSchema } from './LocationArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PersonalDetailsInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    name: z
      .union([z.boolean(), z.lazy(() => LegalNameArgsObjectSchema)])
      .optional(),
    location: z
      .union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const PersonalDetailsIncludeObjectSchema = Schema;
