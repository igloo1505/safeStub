import { z } from 'zod';
import { SettingsWhereUniqueInputObjectSchema } from './SettingsWhereUniqueInput.schema';
import { SettingsCreateWithoutUserInputObjectSchema } from './SettingsCreateWithoutUserInput.schema';
import { SettingsUncheckedCreateWithoutUserInputObjectSchema } from './SettingsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => SettingsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SettingsCreateWithoutUserInputObjectSchema),
      z.lazy(() => SettingsUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const SettingsCreateOrConnectWithoutUserInputObjectSchema = Schema;
