import { z } from 'zod';
import { ColorsCreateWithoutTeamInputObjectSchema } from './ColorsCreateWithoutTeamInput.schema';
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from './ColorsUncheckedCreateWithoutTeamInput.schema';
import { ColorsCreateOrConnectWithoutTeamInputObjectSchema } from './ColorsCreateOrConnectWithoutTeamInput.schema';
import { ColorsUpsertWithoutTeamInputObjectSchema } from './ColorsUpsertWithoutTeamInput.schema';
import { ColorsWhereUniqueInputObjectSchema } from './ColorsWhereUniqueInput.schema';
import { ColorsUpdateWithoutTeamInputObjectSchema } from './ColorsUpdateWithoutTeamInput.schema';
import { ColorsUncheckedUpdateWithoutTeamInputObjectSchema } from './ColorsUncheckedUpdateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsUpdateOneWithoutTeamNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ColorsCreateWithoutTeamInputObjectSchema),
        z.lazy(() => ColorsUncheckedCreateWithoutTeamInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ColorsCreateOrConnectWithoutTeamInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ColorsUpsertWithoutTeamInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ColorsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ColorsUpdateWithoutTeamInputObjectSchema),
        z.lazy(() => ColorsUncheckedUpdateWithoutTeamInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ColorsUpdateOneWithoutTeamNestedInputObjectSchema = Schema;
