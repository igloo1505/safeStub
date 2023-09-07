import { z } from 'zod';
import { SettingsUpdateWithoutUserInputObjectSchema } from './SettingsUpdateWithoutUserInput.schema';
import { SettingsUncheckedUpdateWithoutUserInputObjectSchema } from './SettingsUncheckedUpdateWithoutUserInput.schema';
import { SettingsCreateWithoutUserInputObjectSchema } from './SettingsCreateWithoutUserInput.schema';
import { SettingsUncheckedCreateWithoutUserInputObjectSchema } from './SettingsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => SettingsUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SettingsUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SettingsCreateWithoutUserInputObjectSchema),
      z.lazy(() => SettingsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SettingsUpsertWithoutUserInputObjectSchema = Schema;
