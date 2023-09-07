import { z } from 'zod';
import { SettingsCreateWithoutUserInputObjectSchema } from './SettingsCreateWithoutUserInput.schema';
import { SettingsUncheckedCreateWithoutUserInputObjectSchema } from './SettingsUncheckedCreateWithoutUserInput.schema';
import { SettingsCreateOrConnectWithoutUserInputObjectSchema } from './SettingsCreateOrConnectWithoutUserInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './SettingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SettingsCreateWithoutUserInputObjectSchema),
        z.lazy(() => SettingsUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SettingsCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SettingsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SettingsCreateNestedOneWithoutUserInputObjectSchema = Schema;
