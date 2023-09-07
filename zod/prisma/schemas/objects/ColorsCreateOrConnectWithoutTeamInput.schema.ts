import { z } from 'zod';
import { ColorsWhereUniqueInputObjectSchema } from './ColorsWhereUniqueInput.schema';
import { ColorsCreateWithoutTeamInputObjectSchema } from './ColorsCreateWithoutTeamInput.schema';
import { ColorsUncheckedCreateWithoutTeamInputObjectSchema } from './ColorsUncheckedCreateWithoutTeamInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorsCreateOrConnectWithoutTeamInput> = z
  .object({
    where: z.lazy(() => ColorsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ColorsCreateWithoutTeamInputObjectSchema),
      z.lazy(() => ColorsUncheckedCreateWithoutTeamInputObjectSchema),
    ]),
  })
  .strict();

export const ColorsCreateOrConnectWithoutTeamInputObjectSchema = Schema;
