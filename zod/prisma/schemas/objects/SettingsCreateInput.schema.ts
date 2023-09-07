import { z } from 'zod';
import { UserCreateNestedOneWithoutSettingsInputObjectSchema } from './UserCreateNestedOneWithoutSettingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateInput> = z
  .object({
    darkmode: z.boolean().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSettingsInputObjectSchema),
  })
  .strict();

export const SettingsCreateInputObjectSchema = Schema;
