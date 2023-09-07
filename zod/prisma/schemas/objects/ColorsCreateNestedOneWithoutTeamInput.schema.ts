import { z } from 'zod';
import { ColorsCreateWithoutTeamInputObjectSchema } from './ColorsCreateWithoutTeamInput.schema';
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from './ColorsUncheckedCreateWithoutTeamInput.schema';
import { ColorsCreateOrConnectWithoutTeamInputObjectSchema } from './ColorsCreateOrConnectWithoutTeamInput.schema';
import { ColorsWhereUniqueInputObjectSchema } from './ColorsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCreateNestedOneWithoutTeamInput> = z
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
    connect: z.lazy(() => ColorsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ColorsCreateNestedOneWithoutTeamInputObjectSchema = Schema;
