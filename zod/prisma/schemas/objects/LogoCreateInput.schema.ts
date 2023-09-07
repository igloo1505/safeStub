import { z } from 'zod';
import { LogoCreaterelInputObjectSchema } from './LogoCreaterelInput.schema';
import { TeamCreateNestedOneWithoutLogosInputObjectSchema } from './TeamCreateNestedOneWithoutLogosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LogoCreateInput> = z
  .object({
    path: z.string(),
    width: z.number(),
    height: z.number(),
    rel: z
      .union([z.lazy(() => LogoCreaterelInputObjectSchema), z.string().array()])
      .optional(),
    url: z.string().optional().nullable(),
    Team: z
      .lazy(() => TeamCreateNestedOneWithoutLogosInputObjectSchema)
      .optional(),
  })
  .strict();

export const LogoCreateInputObjectSchema = Schema;
