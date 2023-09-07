import { z } from 'zod';
import { SettingsCreateWithoutUserInputObjectSchema } from './SettingsCreateWithoutUserInput.schema';
import { SettingsUncheckedCreateWithoutUserInputObjectSchema } from './SettingsUncheckedCreateWithoutUserInput.schema';
import { SettingsCreateOrConnectWithoutUserInputObjectSchema } from './SettingsCreateOrConnectWithoutUserInput.schema';
import { SettingsUpsertWithoutUserInputObjectSchema } from './SettingsUpsertWithoutUserInput.schema';
import { SettingsWhereUniqueInputObjectSchema } from './SettingsWhereUniqueInput.schema';
import { SettingsUpdateWithoutUserInputObjectSchema } from './SettingsUpdateWithoutUserInput.schema';
import { SettingsUncheckedUpdateWithoutUserInputObjectSchema } from './SettingsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SettingsUpdateOneWithoutUserNestedInput> = z
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
    upsert: z.lazy(() => SettingsUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SettingsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SettingsUpdateWithoutUserInputObjectSchema),
        z.lazy(() => SettingsUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SettingsUpdateOneWithoutUserNestedInputObjectSchema = Schema;
